import { PrusaMetalBlackMaterial } from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function PSU({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <group>
      <group position={[0.294, 0.122, -0.162]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          geometry={nodes.psu_cover_bottom.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.105, -0.009, 0.109]}
        />
        <mesh
          geometry={nodes.psu_cover_top.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.105, -0.009, 0.109]}
        />
        <mesh
          geometry={nodes.psu_metal.geometry}
          material={PrusaMetalBlackMaterial}
          position={[-0.058, -0.007, -0.019]}
        />
        <group position={[-0.102, -0.01, 0.107]}>
          <mesh
            geometry={nodes.psu_plug_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.psu_plug_2.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <mesh
          geometry={nodes.psu_switch001.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.083, -0.009, 0.109]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
    </group>
  );
}
