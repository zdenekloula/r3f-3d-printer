import { PrusaMetalBlackMaterial, PrusaOrangeMaterial } from "./materials";
import { PrusaPrinterModelGLTF } from "./types";

export function LCD({ nodes, materials }: PrusaPrinterModelGLTF) {
  return (
    <group>
      <group position={[0.106, 0.474, 0.101]} rotation={[-Math.PI / 4, 0, 0]}>
        <group position={[0.046, 0.111, -0.09]}>
          <mesh
            geometry={nodes.lcd_board_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.lcd_board_2.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.lcd_board_3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.lcd_board_4.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <mesh
          geometry={nodes.lcd_knob.geometry}
          material={PrusaMetalBlackMaterial}
          position={[0.108, 0.126, -0.088]}
          rotation={[0, 1.04, 0]}
        />
        <mesh
          geometry={nodes.lcd_cover.geometry}
          material={PrusaOrangeMaterial}
          position={[0.045, 0.125, -0.108]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          geometry={nodes.lcd_supports_1.geometry}
          material={PrusaOrangeMaterial}
          position={[-0.009, 0.106, -0.06]}
          rotation={[Math.PI / 4, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.lcd_supports_2.geometry}
          material={PrusaOrangeMaterial}
          position={[0.111, 0.106, -0.06]}
          rotation={[Math.PI / 4, 0, Math.PI / 2]}
        />
      </group>
    </group>
  );
}
