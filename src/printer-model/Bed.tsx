import {
  MetalSteel,
  PrusaMetalBlackMaterial,
  PrusaOrangeMaterial,
} from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function Bed({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <>
      <group position={[0.071, 0.478, -0.199]} rotation={[Math.PI, 0, 0]}>
        <group
          position={[0.166, 0.172, -0.135]}
          rotation={[0, 1.053, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.frame_linear_bearing_1_1.geometry}
            material={MetalSteel}
          />
          <mesh
            geometry={nodes.frame_linear_bearing_1_2.geometry}
            material={PrusaMetalBlackMaterial}
          />
        </group>
        <group
          position={[-0.004, 0.206, -0.135]}
          rotation={[0, -0.294, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.frame_linear_bearing_1_1.geometry}
            material={MetalSteel}
          />
          <mesh
            geometry={nodes.frame_linear_bearing_1_2.geometry}
            material={PrusaMetalBlackMaterial}
          />
        </group>
        <group
          position={[-0.004, 0.136, -0.135]}
          rotation={[-Math.PI, -0.358, Math.PI / 2]}
        >
          <mesh
            geometry={nodes.frame_linear_bearing_1_1.geometry}
            material={MetalSteel}
          />
          <mesh
            geometry={nodes.frame_linear_bearing_1_2.geometry}
            material={PrusaMetalBlackMaterial}
          />
        </group>
        <mesh
          geometry={nodes.frog_base.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.1, 0.357, -0.125]}
        />
        <mesh
          geometry={nodes.frog_belt_holder.geometry}
          material={PrusaOrangeMaterial}
          position={[0.081, 0.172, -0.129]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.frog_belt_tensioner.geometry}
          material={PrusaOrangeMaterial}
          position={[0.081, 0.175, -0.129]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.frog_u_bolt_1.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.166, 0.172, -0.119]}
        />
        <mesh
          geometry={nodes.frog_u_bolt_2.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.004, 0.137, -0.119]}
        />
        <mesh
          geometry={nodes.frog_u_bolt_3.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.004, 0.207, -0.119]}
        />
      </group>
      <group position={[0.088, 0.094, 0.073]}>
        <group position={[-0.065, 0.328, -0.153]}>
          <mesh
            geometry={nodes.heatbed_base_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.heatbed_base_2.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <group position={[-0.064, 0.335, -0.156]}>
          <mesh
            receiveShadow
            geometry={nodes.heatbed_base_sheet_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveShadow
            geometry={nodes.heatbed_base_sheet_2.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <mesh
          geometry={nodes.heatbed_cable_cover_bottom.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.046, 0.113, -0.158]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.heatbed_cable_cover_top.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.046, 0.093, -0.152]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.heatbed_space_1.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.062, 0.213, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_2.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.062, 0.108, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_3.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.048, 0.318, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_4.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.048, 0.108, -0.147]}
          rotation={[0, 0, -0.224]}
        />
        <mesh
          geometry={nodes.heatbed_space_5.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.167, 0.318, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_6.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.167, 0.213, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_7.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.167, 0.108, -0.147]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          geometry={nodes.heatbed_space_8.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.062, 0.318, -0.147]}
        />
        <mesh
          geometry={nodes.heatbed_space_9.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.048, 0.213, -0.147]}
        />
      </group>
    </>
  );
}
