import React from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Controls: React.FC = () => {
  const { camera, gl } = useThree();

  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      zoomSpeed={0.5}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2.2}
      minDistance={0.4}
      maxDistance={0.8}
      target={[0, 1.4, 0]}
    />
  );
};

export default Controls;
