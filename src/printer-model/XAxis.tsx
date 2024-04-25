import { MetalSteel, PrusaOrangeMaterial } from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function XAxis({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <>
      <mesh
        geometry={nodes.idler_roller_flat_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.319, 0.247, -0.34]}
      />
      <mesh
        geometry={nodes.x_end_idler_1.geometry}
        material={PrusaOrangeMaterial}
        position={[0.355, 0.265, -0.371]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.x_end_motor.geometry}
        material={PrusaOrangeMaterial}
        position={[-0.03, 0.265, -0.371]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.x_smooth_rod_1.geometry}
        material={MetalSteel}
        position={[-0.037, 0.25, -0.365]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.x_smooth_rod_2.geometry}
        material={MetalSteel}
        position={[-0.037, 0.25, -0.32]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.y_pulley_2.geometry}
        material={MetalSteel}
        position={[-0.062, 0.255, -0.34]}
        rotation={[0, -0.108, 0]}
      />
      <mesh
        geometry={nodes.z_nut_left.geometry}
        material={MetalSteel}
        position={[-0.013, 0.265, -0.375]}
        rotation={[0, 0, -Math.PI / 4]}
      />
      <mesh
        geometry={nodes.z_nut_right.geometry}
        material={MetalSteel}
        position={[0.317, 0.265, -0.375]}
        rotation={[0, 0, Math.PI / 4]}
      />
      <mesh
        geometry={nodes.x_nema_1.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.062, 0.202, -0.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[-0.062, 0.202, -0.34]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.extruder_nema_2_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.extruder_nema_2_2.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <group position={[-0.062, 0.202, -0.34]} rotation={[Math.PI / 2, 0, 0]}>
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
        geometry={nodes.x_nema_3.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.062, 0.202, -0.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </>
  );
}
