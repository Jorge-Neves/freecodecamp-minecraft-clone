import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <div>Prototype</div>
      <Canvas>
        <Sky sunPosition={[3, 2, 2]} />
        <ambientLight intensity={0.25} />
        <Physics></Physics>
      </Canvas>
    </>
  );
}

export default App;
