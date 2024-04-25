import { useGLTF } from "@react-three/drei";

import { PrintedFilamentLayers } from "./PrintedFilamentLayers";
import { Bed } from "./printer-model/Bed";
import { Extruder } from "./printer-model/Extruder";
import { StaticParts } from "./printer-model/StaticParts";
import { PrusaPrinterModelGLTF } from "./printer-model/types";
import { XAxis } from "./printer-model/XAxis";
import { useAppStore } from "./store";
import { useFrameInterval } from "./hooks/useFrameInterval";
import { useVirtualPositions } from "./hooks/useVirtualPositions";

export function Visualization(props: JSX.IntrinsicElements["group"]) {
  const modelGLTF = useGLTF("/model-optimized.glb") as PrusaPrinterModelGLTF;
  const { state, tick } = useAppStore();

  // update the visualization every 100ms
  useFrameInterval(() => {
    if (state === "start" || state === "finished") {
      return;
    }
    return tick();
  }, 0.1);

  const { groupRefY, groupRefE, groupRefX } = useVirtualPositions();

  return (
    <>
      <group {...props}>
        <group rotation={[1.566, 0, 0]}>
          {/* Dynamic Parts */}
          {/* Y Axis parts */}
          <group ref={groupRefY} position={[0, 0, 0]}>
            <group
              position={[0.031, 0.407, -0.084]}
              rotation={[Math.PI, 0, 0]}
              scale={0.000_95}
            >
              <PrintedFilamentLayers />
            </group>

            <Bed {...modelGLTF} />
          </group>

          {/* Z/E Axis parts */}
          <group ref={groupRefE} position={[0, 0, 0]}>
            <group ref={groupRefX} position={[0, 0, 0]}>
              <Extruder {...modelGLTF} />
            </group>
            <XAxis {...modelGLTF} />
          </group>

          {/* Not moving parts */}
          <StaticParts {...modelGLTF} />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/model-optimized.glb");
