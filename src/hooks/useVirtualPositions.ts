import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import {
  calculateVirtualPositionE,
  calculateVirtualPositionX,
  calculateVirtualPositionY,
} from "../utils/calculateVirtualPosition";
import { useAppStore } from "../store";

export function useVirtualPositions() {
  const groupRefY = useRef<THREE.Group>(null);
  const groupRefE = useRef<THREE.Group>(null);
  const groupRefX = useRef<THREE.Group>(null);

  useFrame(() => {
    const activePoint = useAppStore.getState().activePoint;

    if (groupRefY.current) {
      groupRefY.current.position.y = THREE.MathUtils.damp(
        groupRefY.current.position.y,
        calculateVirtualPositionY(activePoint.y),
        4,
        0.1,
      );
    }

    if (groupRefE.current) {
      groupRefE.current.position.z = THREE.MathUtils.damp(
        groupRefE.current.position.z,
        calculateVirtualPositionE(activePoint.z),
        4,
        0.1,
      );
    }

    if (groupRefX.current) {
      groupRefX.current.position.x = THREE.MathUtils.damp(
        groupRefX.current.position.x,
        calculateVirtualPositionX(activePoint.x),
        4,
        0.1,
      );
    }
  });

  return {
    groupRefY,
    groupRefE,
    groupRefX,
  };
}
