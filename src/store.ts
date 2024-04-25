import { create } from "zustand";

import { normalizeGcodeData } from "./utils/normalizeGcodeData";

export type ParsedGcodeData = {
  points: Point[];
  read: number;
  baseCenter: { x: number; y: number };
  max: { x: number; y: number; z: number };
  min: { x: number; y: number; z: number };
  filamentLength: number;
};
export type Point = {
  x: number;
  y: number;
  z: number;
  e: number;
  type: "travel" | "extrude";
};
export type Layers = {
  [key: string]: Point[];
};
type ActiveLayer = Array<string>;
type StringifiedLayerKeys = Extract<keyof Layers, string>;

type AppState = {
  state: "start" | "running" | "finished";
  layers: Layers;
  animationLayers: Layers;
  activeLayerPointIndex: number;
  activeLayers: ActiveLayer;
  activePoint: Point;
  getSortedLayerKeys: () => Array<StringifiedLayerKeys>;
  getSortedAnimationLayerKeys: () => Array<StringifiedLayerKeys>;
  tick: () => void;
  loadParsedGcode: (parsedGCode: ParsedGcodeData) => void;
};

const defaultPoint = {
  x: 0, // center extruder max 250, default 0
  y: 104, //center bed max 208, default 208
  z: 210, // center XAxis max 210, default 50
  e: 0,
  type: "extrude",
} as const;

export const useAppStore = create<AppState>((set, get) => {
  return {
    state: "start",
    layers: {},
    animationLayers: {},
    activeLayers: [],
    activeLayerPointIndex: 0,
    activePoint: defaultPoint,

    getSortedLayerKeys: () => {
      return Object.keys(get().layers).sort((a, b) => Number(a) - Number(b));
    },

    getSortedAnimationLayerKeys: () => {
      return Object.keys(get().animationLayers).sort(
        (a, b) => Number(a) - Number(b),
      );
    },

    loadParsedGcode: (parsedGcodeData: ParsedGcodeData) => {
      return set(() => {
        const { layers, animationLayers } = normalizeGcodeData(parsedGcodeData);
        return {
          state: "running",
          layers,
          animationLayers,
        };
      });
    },

    tick: () => {
      return set((state) => {
        const sortedAnimationLayerKeys = state.getSortedAnimationLayerKeys();

        const currentLayer =
          state.activeLayers.at(-1) || sortedAnimationLayerKeys[0];
        const currentLayerAnimationPoints = state.animationLayers[currentLayer];

        const nextPoint =
          currentLayerAnimationPoints[state.activeLayerPointIndex];

        const nextLayerIndex =
          sortedAnimationLayerKeys.indexOf(currentLayer) + 1;
        const nextLayer = sortedAnimationLayerKeys.at(nextLayerIndex);

        // Empty start
        if (state.activeLayers.length === 0) {
          return {
            activeLayers: [sortedAnimationLayerKeys[0]],
            activeLayerPointIndex: 0,
            activePoint: defaultPoint,
            state: "running",
          };
        }

        // The animation is finished
        if (!nextPoint && !nextLayer) {
          return {
            state: "finished",
            activePoint: defaultPoint,
          };
        }

        // Final tick of the layer (switch to next layer)
        if (!nextPoint) {
          const nextLayer = sortedAnimationLayerKeys.at(
            sortedAnimationLayerKeys.indexOf(currentLayer) + 1,
          ) as string;

          return {
            activeLayers: [...state.activeLayers, nextLayer],
            activeLayerPointIndex: 0,
            activePoint: state.animationLayers[nextLayer][0],
          };
        }

        // Regular tick
        return {
          activePoint: currentLayerAnimationPoints[state.activeLayerPointIndex],
          activeLayerPointIndex: state.activeLayerPointIndex + 1,
        };
      });
    },
  };
});
