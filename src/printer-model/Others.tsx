import { MetalSteel, PrusaOrangeMaterial } from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function OtherParts({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <>
      <mesh
        geometry={nodes.idler_roller_flat_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.157, 0.422, -0.048]}
        rotation={[-1.179, 0, Math.PI / 2]}
      />

      <mesh
        geometry={nodes.spool_holder.geometry}
        material={materials.PaletteMaterial001}
        position={[0.086, 0.562, -0.38]}
        rotation={[0, 0, -Math.PI / 2]}
      />

      <mesh
        geometry={nodes.y_belt_idler.geometry}
        material={materials.PaletteMaterial001}
        position={[0.152, 0.422, -0.048]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.y_holder_ziptie_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.237, 0.434, -0.054]}
      />
      <mesh
        geometry={nodes.y_holder_ziptie_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.237, 0.116, -0.054]}
      />
      <mesh
        geometry={nodes.y_holder_ziptie_3.geometry}
        material={materials.PaletteMaterial001}
        position={[0.067, 0.434, -0.054]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.y_holder_ziptie_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0.067, 0.116, -0.054]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.y_motor_holder.geometry}
        material={PrusaOrangeMaterial}
        position={[0.139, 0.13, -0.046]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.y_pulley_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.149, 0.13, -0.046]}
        rotation={[0.179, 0, Math.PI / 2]}
      />

      <mesh
        geometry={nodes.y_rod_holder_1.geometry}
        material={PrusaOrangeMaterial}
        position={[0.067, 0.109, -0.054]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.y_rod_holder_2.geometry}
        material={PrusaOrangeMaterial}
        position={[0.237, 0.109, -0.054]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.y_rod_holder_3.geometry}
        material={PrusaOrangeMaterial}
        position={[0.067, 0.441, -0.054]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.y_rod_holder_4.geometry}
        material={PrusaOrangeMaterial}
        position={[0.237, 0.441, -0.054]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.y_smooth_rod_1.geometry}
        material={MetalSteel}
        position={[0.067, 0.111, -0.064]}
      />
      <mesh
        geometry={nodes.y_smooth_rod_2.geometry}
        material={MetalSteel}
        position={[0.237, 0.111, -0.064]}
      />
      <mesh
        geometry={nodes.z_axis_bottom_left.geometry}
        material={PrusaOrangeMaterial}
        position={[-0.046, 0.236, -0.074]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.z_axis_bottom_right.geometry}
        material={PrusaOrangeMaterial}
        position={[0.337, 0.236, -0.074]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.z_axis_top_left.geometry}
        material={PrusaOrangeMaterial}
        position={[-0.043, 0.236, -0.392]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.z_axis_top_right.geometry}
        material={PrusaOrangeMaterial}
        position={[0.337, 0.236, -0.392]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.z_screw_cover_1.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.013, 0.265, -0.071]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.z_screw_cover_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.317, 0.265, -0.071]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.y_nema_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.099, 0.13, -0.046]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      <group
        position={[0.099, 0.13, -0.046]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
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
        position={[0.099, 0.13, -0.046]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
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
    </>
  );
}
