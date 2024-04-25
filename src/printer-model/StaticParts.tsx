import { Einsy } from "./Einsy";
import { LCD } from "./Lcd";
import {
  MetalMaterial,
  MetalScrewMaterial,
  MetalSteel,
  PrusaMetalBlackMaterial,
} from "./materials";
import { OtherParts } from "./Others";
import { PSU } from "./Psu";
import { PrusaPrinterModelGLTF } from "./types";

export function Screws({ nodes }: PrusaPrinterModelGLTF) {
  return (
    <>
      <mesh
        geometry={nodes.frame_screw_1.geometry}
        material={MetalScrewMaterial}
        position={[0.239, 0.277, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_10.geometry}
        material={MetalScrewMaterial}
        position={[0.032, 0.486, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_11.geometry}
        material={MetalScrewMaterial}
        position={[0.032, 0.486, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_12.geometry}
        material={MetalScrewMaterial}
        position={[-0.005, 0.277, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_13.geometry}
        material={MetalScrewMaterial}
        position={[-0.005, 0.277, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_14.geometry}
        material={MetalScrewMaterial}
        position={[-0.028, 0.277, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_15.geometry}
        material={MetalScrewMaterial}
        position={[-0.028, 0.277, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_16.geometry}
        material={MetalScrewMaterial}
        position={[0.216, 0.277, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_17.geometry}
        material={MetalScrewMaterial}
        position={[0.216, 0.141, -0.08]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.frame_screw_18.geometry}
        material={MetalScrewMaterial}
        position={[0.216, 0.141, -0.057]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.frame_screw_19.geometry}
        material={MetalScrewMaterial}
        position={[0.239, 0.141, -0.08]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.frame_screw_2.geometry}
        material={MetalScrewMaterial}
        position={[0.009, 0.486, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_20.geometry}
        material={MetalScrewMaterial}
        position={[0.239, 0.141, -0.057]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.frame_screw_3.geometry}
        material={MetalScrewMaterial}
        position={[0.202, 0.486, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_4.geometry}
        material={MetalScrewMaterial}
        position={[0.179, 0.486, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_5.geometry}
        material={MetalScrewMaterial}
        position={[0.216, 0.277, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_6.geometry}
        material={MetalScrewMaterial}
        position={[0.009, 0.486, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_7.geometry}
        material={MetalScrewMaterial}
        position={[0.179, 0.486, -0.057]}
      />
      <mesh
        geometry={nodes.frame_screw_8.geometry}
        material={MetalScrewMaterial}
        position={[0.239, 0.277, -0.08]}
      />
      <mesh
        geometry={nodes.frame_screw_9.geometry}
        material={MetalScrewMaterial}
        position={[0.202, 0.486, -0.057]}
      />
    </>
  );
}

function ThreadedShaftLeft({ nodes }: PrusaPrinterModelGLTF) {
  return (
    <group
      position={[-0.013, 0.265, -0.054]}
      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
    >
      <mesh
        geometry={nodes.frame_threaded_shaft_1.geometry}
        material={MetalMaterial}
      />
      <mesh
        geometry={nodes.frame_threaded_shaft_3.geometry}
        material={PrusaMetalBlackMaterial}
      />
    </group>
  );
}

function ThreadedShaftRight({ nodes }: PrusaPrinterModelGLTF) {
  return (
    <group
      position={[0.317, 0.265, -0.054]}
      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
    >
      <mesh
        geometry={nodes.frame_threaded_shaft_1.geometry}
        material={MetalMaterial}
      />
      <mesh
        geometry={nodes.frame_threaded_shaft_3.geometry}
        material={PrusaMetalBlackMaterial}
      />
    </group>
  );
}

export function StaticParts({
  nodes,
  materials,
  ...props
}: PrusaPrinterModelGLTF) {
  return (
    <>
      <LCD nodes={nodes} materials={materials} {...props} />
      <PSU nodes={nodes} materials={materials} {...props} />
      <Einsy nodes={nodes} materials={materials} {...props} />
      <OtherParts nodes={nodes} materials={materials} {...props} />
      <ThreadedShaftLeft nodes={nodes} materials={materials} {...props} />
      <ThreadedShaftRight nodes={nodes} materials={materials} {...props} />
      <group position={[0.047, -0.039, 0.03]}>
        <Screws nodes={nodes} materials={materials} {...props} />
        <mesh
          geometry={nodes.frame_long_extrusion_1.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.191, 0.274, -0.069]}
        />
        <mesh
          geometry={nodes.frame_long_extrusion_2.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.021, 0.274, -0.069]}
        />
        <mesh
          geometry={nodes.frame_mk3_front_plate.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.106, 0.479, -0.047]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.frame_mk3_rear_plate.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.106, 0.144, -0.05]}
        />
        <mesh
          geometry={nodes.frame_mk3s.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.079, 0.268, -0.052]}
        />
        <mesh
          geometry={nodes.frame_short_extrusion_1.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.016, 0.148, -0.069]}
        />
        <mesh
          geometry={nodes.frame_short_extrusion_2.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.228, 0.148, -0.069]}
        />
      </group>
      <mesh
        geometry={nodes.z_smooth_rod_1.geometry}
        material={MetalSteel}
        position={[-0.03, 0.265, -0.389]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.z_smooth_rod_2.geometry}
        material={MetalSteel}
        position={[0.334, 0.265, -0.389]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </>
  );
}
