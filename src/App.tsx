import {
  ContactShadows,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect } from "react";

import { usePrintableModelData } from "./api/hooks/usePrintableModelData";
import { Environment } from "./Environment";
import { ParsedGcodeData, useAppStore } from "./store";
import { Visualization } from "./Visualization";
import { Spinner } from "./Spinner";

const gridSettings = {
  gridSize: [10.5, 10.5],
  cellSize: 0.6,
  cellThickness: 1,
  cellColor: "#6f6f6f",
  sectionSize: 3.3,
  sectionThickness: 1.5,
  sectionColor: "#9d4b4b",
  fadeDistance: 25,
  fadeStrength: 1,
  followCamera: false,
  infiniteGrid: true,
};

function App() {
  const { loadParsedGcode } = useAppStore();

  const onDataChange = useCallback(
    (data: ParsedGcodeData | undefined) => {
      if (data) {
        loadParsedGcode(data);
      }
    },
    [loadParsedGcode],
  );

  const { isLoading } = usePrintableModelData({
    onDataChange,
  });

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 bg-black/70 text-white/90">
          <Spinner />
          <p>Loading models and printable data...</p>
        </div>
      )}
      <Canvas
        shadows
        camera={{
          position: [7, 6, 7],
          fov: 25,
          zoom: 0.7,
        }}
      >
        <group>
          <Visualization scale={10} position={[-1.5, -0.19, -2]} castShadow />
          <Grid position={[0, -0.01, 0]} {...gridSettings} />

          <ContactShadows
            position={[0, -0.023, 0]}
            opacity={1}
            scale={15}
            blur={1.8}
            color="#000000"
            far={10}
          />
          <ContactShadows
            position={[0, -0.023, 0]}
            opacity={0.5}
            scale={15}
            blur={1.8}
            color="#000000"
            far={10}
          />
        </group>

        <Environment />
        <OrbitControls />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
            labelColor="white"
          />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}

export { App };
