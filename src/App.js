import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Bellenblaas from './Model'


export default function App() {
  return (
    <Canvas style={{ height: `900px` }}>
      <ambientLight intensity={0.2}/>
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Bellenblaas />
      </Suspense>
    </Canvas>
  )
}
