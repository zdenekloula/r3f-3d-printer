import { HDRJPGLoader } from "@monogrid/gainmap-js";
import { Environment as DreiEnvironment } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { BackSide } from "three";

export function Environment() {
  const gl = useThree((state) => state.gl);
  const texture = useLoader(HDRJPGLoader, "potsdamer_platz.jpeg", (loader) => {
    loader.setRenderer(gl);
    loader.setPath?.("");
  });

  return (
    <DreiEnvironment background={false} blur={0}>
      <color attach="background" args={["black"]} />
      <mesh rotation={[0, 0, 0]} scale={5}>
        <sphereGeometry />
        <meshBasicMaterial
          key={"EnvironmentBasicMaterial"}
          transparent
          opacity={1.5}
          map={texture.renderTarget.texture}
          side={BackSide}
          toneMapped={false}
        />
      </mesh>
    </DreiEnvironment>
  );
}
