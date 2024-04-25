import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function useFrameInterval(callback: () => void, delay: number) {
  const lastTimestampRef = useRef(0);

  useFrame((state) => {
    const currentTime = state.clock.elapsedTime;
    if (currentTime - lastTimestampRef.current >= delay) {
      callback();
      lastTimestampRef.current = currentTime;
    }
  });
}
