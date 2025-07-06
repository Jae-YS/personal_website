import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useRef, useState, Suspense } from "react";
import { TextureLoader } from "three";

export default function Scene({
  mode,
  setMode,
}: {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}) {
  const face_green = useLoader(TextureLoader, "/face_green.png");
  const face_red = useLoader(TextureLoader, "/face_red.png");
  const face_blue = useLoader(TextureLoader, "/face_blue.png");
  const face_yellow = useLoader(TextureLoader, "/face_yellow.png");
  const face_white = useLoader(TextureLoader, "/face_white.png");
  const face_orange = useLoader(TextureLoader, "/face_orange.png");
  const sphere = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (light.current) {
      light.current.position.x = state.pointer.x * 20;
      light.current.position.y = state.pointer.y * 20;
    }

    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.pointer.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.pointer.y / 2 : 0),
        0.2
      );
    }
  });

  useFrame((_state, delta) => {
    if (sphere.current) {
      sphere.current.rotation.x += delta;
      sphere.current.rotation.y += delta;
      sphere.current.position.y = Math.sin(_state.clock.elapsedTime) * 1;
    }
  });

  const [{ ambient, env }] = useSpring(() => ({
    ambient: mode === "dark" && !hovered ? 1.5 : 0.5,
    env: mode === "dark" && !hovered ? 0.4 : 1,
    config: (key) =>
      key === "wobble" && hovered
        ? { mass: 2, tension: 1000, friction: 10 }
        : {},
  }));

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={82}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            const next = mode === "light" ? "dark" : "light";
            setMode(next);
          }}
        >
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial attach="material-0" map={face_red} />{" "}
          {/* Right */}
          <meshStandardMaterial attach="material-1" map={face_orange} />{" "}
          {/* Left */}
          <meshStandardMaterial attach="material-2" map={face_white} />{" "}
          {/* Top */}
          <meshStandardMaterial attach="material-3" map={face_yellow} />{" "}
          {/* Bottom */}
          <meshStandardMaterial attach="material-4" map={face_green} />{" "}
          {/* Front */}
          <meshStandardMaterial attach="material-5" map={face_blue} />{" "}
          {/* Back */}
        </a.mesh>

        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode === "dark" ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}
