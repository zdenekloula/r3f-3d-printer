import { PrusaPrinterModelGLTF } from "./types";

export function Einsy({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <group>
      <mesh
        geometry={nodes.einsy_base.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.033, 0.229, -0.201]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.einsy_door.geometry}
        material={materials.PaletteMaterial001}
        position={[0.017, 0.137, -0.202]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.einsy_hinge_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.013, 0.224, -0.201]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.einsy_hinge_2.geometry}
        material={materials.PaletteMaterial001}
        position={[0.019, 0.224, -0.086]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
    </group>
  );
}
