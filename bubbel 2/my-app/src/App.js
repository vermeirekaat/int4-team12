import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Scene from './Scene'

export default function App() {
  // achtergrondkleur en tekstkleur
  const [{ background }, set] = useSpring({ background: '#f0f0f3'}, [])
  return (
    <a.main style={{ background }}>
      <Canvas className="canvas">
        <Scene setBg={set} />
      </Canvas>
    </a.main>
  )
}
