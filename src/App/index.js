import { Sky } from "drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
import { Physics } from "use-cannon";
import Camera from "../Camera";
import Ground from "../Ground";
import Player from "../Player";

export default function index() {
  return (
    <Canvas shadowMap sRGB gl={{ alpha: false }}>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
  );
}
