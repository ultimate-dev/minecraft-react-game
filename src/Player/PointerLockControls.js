import React, { useEffect, useRef } from "react";
import { useThree, extend } from "react-three-fiber";
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls";

extend({ PointerLockControlsImpl });

export default function PointerLockControls(props) {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener("click", () => {
      controls.current.lock();
    });
  }, []);

  return <pointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />;
}
