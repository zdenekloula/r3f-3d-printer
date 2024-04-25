import { LAYER_DENSITY } from "../config";
import { Layers, ParsedGcodeData } from "../store";

function addPointToLayer(layers: Layers, point: ParsedGcodeData["points"][0]) {
  if (layers[point.z] === undefined) {
    layers[point.z] = [point];
  } else {
    layers[point.z].push(point);
  }
}

export function normalizeGcodeData(parsedGcodeData: ParsedGcodeData) {
  const layers: Layers = {};
  const animationLayers: Layers = {};

  const gcodePoints = parsedGcodeData.points.entries();

  for (const [index, point] of gcodePoints) {
    addPointToLayer(layers, point);
    if (index % LAYER_DENSITY === 0) {
      addPointToLayer(animationLayers, point);
    }
  }

  return {
    layers,
    animationLayers,
  };
}
