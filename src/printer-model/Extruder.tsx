import { MetalSteel, PrusaMetalBlackMaterial } from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function Extruder({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <group position={[0.038, 0.211, -0.298]} rotation={[0, -0.026, 0]}>
      <group
        position={[0.041, 0.039, -0.068]}
        rotation={[0.247, 0.025, -0.006]}
      >
        <mesh
          geometry={nodes.frame_linear_bearing_1_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.frame_linear_bearing_1_2.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <group position={[0.03, 0.039, -0.022]} rotation={[-0.094, 0.026, 0.002]}>
        <mesh
          geometry={nodes.frame_linear_bearing_1_1.geometry}
          material={MetalSteel}
        />
        <mesh
          geometry={nodes.frame_linear_bearing_1_2.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.extruder_body.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.094]}
      />
      <mesh
        geometry={nodes.extruder_cable_holder.geometry}
        material={materials.PaletteMaterial001}
        position={[0.03, 0.051, -0.047]}
        rotation={[0, 0.026, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_cover.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.094]}
      />
      <mesh
        geometry={nodes.extruder_e3d.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.extruder_fan_shroud.geometry}
        material={PrusaMetalBlackMaterial}
        position={[-0.097, -0.033, 0.001]}
        rotation={[1.569, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_fs_cover.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.094]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_idler.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.094]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.extruder_motor_plate.geometry}
        material={materials.PaletteMaterial001}
        position={[0.029, 0.067, -0.094]}
      />
      <group position={[0.052, 0.062, -0.026]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.extruder_pinda_probe_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_pinda_probe_2.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.extruder_print_fan_support.geometry}
        material={materials.PaletteMaterial001}
        position={[0.022, 0.067, -0.094]}
      />
      <mesh
        geometry={nodes.extruder_x_carriage_back.geometry}
        material={materials.PaletteMaterial001}
        position={[0.03, 0.05, -0.047]}
        rotation={[0, 0.026, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_cooling_fan_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.046, 0.104, -0.029]}
        rotation={[2.409, 0, 0]}
      />
      <mesh
        geometry={nodes.extruder_cooling_fan_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.046, 0.104, -0.029]}
        rotation={[2.409, 0, 0]}
      />
      <mesh
        geometry={nodes.extruder_cooling_fan_3.geometry}
        material={materials.PaletteMaterial001}
        position={[0.046, 0.104, -0.029]}
        rotation={[2.409, 0, 0]}
      />
      <mesh
        geometry={nodes.extruder_noctua_5.geometry}
        material={PrusaMetalBlackMaterial}
        position={[0, 0.07, -0.03]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.extruder_nema_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <group
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <mesh
          geometry={nodes.extruder_nema_2_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_nema_2_2.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <group
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <mesh
          geometry={nodes.extruder_nema_10_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_nema_10_2.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_nema_10_3.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_nema_10_4.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.extruder_nema_3.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_nema_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_nema_5.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_nema_7.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_nema_8.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_nema_9.geometry}
        material={materials.PaletteMaterial001}
        position={[0.025, 0.118, -0.074]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.extruder_x_carriage_back_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.013, 0.05, -0.022]}
        rotation={[0, 0.026, -Math.PI]}
      />
    </group>
  );
}
