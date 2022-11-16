import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Ground;
