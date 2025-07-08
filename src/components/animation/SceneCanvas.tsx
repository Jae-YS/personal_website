import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

const SceneCanvas = ({ mode }: { mode: "light" | "dark" }) => (
  <Canvas
    dpr={[1, 2]}
    shadows
    style={{
      width: "100%",
      height: "100%",
      display: "block",
    }}
  >
    <Suspense fallback={null}>
      <Scene mode={mode} />
    </Suspense>
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  </Canvas>
);

export default SceneCanvas;
