import { MeshStandardMaterial } from "three";

export const PrusaOrangeMaterial = new MeshStandardMaterial({
  color: "#f04505",
  metalness: 0,
  roughness: 1,
});

export const PrusaMetalBlackMaterial = new MeshStandardMaterial({
  color: "#0a0a0a",
  metalness: 0.5,
  roughness: 0.5,
});

export const MetalMaterial = new MeshStandardMaterial({
  color: "#fff",
  metalness: 1,
  roughness: 0.3,
});

export const MetalScrewMaterial = new MeshStandardMaterial({
  color: "#b3b3b3",
  metalness: 0.7,
  roughness: 0.2,
});

export const MetalSteel = new MeshStandardMaterial({
  color: "#fff",
  metalness: 1,
  roughness: 0,
});
