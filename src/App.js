import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <div>Outside of canvas</div>
      <Canvas>
        <Sky />
      </Canvas>
    </>
  );
}

export default App;
