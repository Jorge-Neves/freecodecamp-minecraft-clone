import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Avatar from './components/Avatar';
import Ground from './components/Ground';
import './App.css';

function App() {
  return (
    <>
      <div>Prototype</div>
      <div className="container">
        <Canvas>
          <Sky sunPosition={[3, 2, 2]} />
          <ambientLight intensity={0.25} />
          <Physics>
            <Avatar />
            <Ground />
          </Physics>
        </Canvas>
      </div>
    </>
  );
}

export default App;
