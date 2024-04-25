import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

import { BASE_DARKEN_ITENSITY, BASE_ORANGE_HSL } from "./config";
import { useAppStore } from "./store";

function getLayerColor(index: number, layerCount: number) {
  const brightnessStep = BASE_DARKEN_ITENSITY / layerCount;
  const brightnessStart = BASE_ORANGE_HSL[2] - brightnessStep * layerCount;

  const currentLayerColor = new THREE.Color().setHSL(
    BASE_ORANGE_HSL[0],
    BASE_ORANGE_HSL[1] / 100,
    (brightnessStart + index * brightnessStep) / 100,
  );

  const baseColor = new THREE.Color().setHSL(
    BASE_ORANGE_HSL[0],
    BASE_ORANGE_HSL[1] / 100,
    BASE_ORANGE_HSL[2] / 100,
  );

  return {
    currentLayerColor,
    baseColor,
  };
}

type LineSegmentsProps = {
  layerKey: string;
  color: THREE.Color;
  visible?: boolean;
};

function LineSegments({ layerKey, color, visible }: LineSegmentsProps) {
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useLayoutEffect(() => {
    const state = useAppStore.getState();
    const points = state.layers[layerKey];

    if (geometryRef.current) {
      const indices: number[] = [];

      for (let index = 1; index < points.length; index++) {
        if (points[index].type === "extrude") {
          indices.push(index - 1, index);
        }
      }

      const coords = points.map(({ x, y, z }) => new THREE.Vector3(x, y, z));
      geometryRef.current.setFromPoints(coords);
      geometryRef.current.setIndex(indices);
    }
  }, [layerKey]);

  return (
    <lineSegments visible={visible}>
      <bufferGeometry ref={geometryRef} />
      <lineDashedMaterial attach={"material"} color={color} linewidth={1} />
    </lineSegments>
  );
}

type LineSegmentsListProps = {
  activeLayerKey: string | undefined;
};

const MemoizedLineSegmentsList = React.memo(function LineSegmentsList({
  activeLayerKey = "",
}: LineSegmentsListProps) {
  const state = useAppStore.getState();
  const sortedAnimationKeys = state.getSortedAnimationLayerKeys();
  const sortedKeys = state.getSortedLayerKeys();

  const animationKeysIndex = sortedAnimationKeys.indexOf(activeLayerKey);
  const visibleLayerKeys = sortedAnimationKeys.slice(0, animationKeysIndex);
  const lastVisibleLayerKey = visibleLayerKeys.at(-1);

  return (
    <>
      {visibleLayerKeys.map((key, index) => {
        const isLastLayer = key === lastVisibleLayerKey;

        const { currentLayerColor, baseColor } = getLayerColor(
          index,
          sortedKeys.length,
        );

        return (
          <LineSegments
            key={key}
            layerKey={key}
            color={isLastLayer ? baseColor : currentLayerColor}
          />
        );
      })}
    </>
  );
});
MemoizedLineSegmentsList.displayName = "MemoizedLineSegmentsList";

export function PrintedFilamentLayers() {
  const { activeLayers } = useAppStore();
  const currentLayer = activeLayers.at(-1);

  return (
    <group>
      <MemoizedLineSegmentsList activeLayerKey={currentLayer} />
    </group>
  );
}
