import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

export default function Scene({ setBg }) {
    const sphere = useRef()
    //usestate om modus (zwart of wit) in te stellen
    const [mode, setMode] = useState(false);
    //usestate wanneer je klikt => true
    const [down, setDown] = useState(false);
    //useState wanneer je hovered over de bol
    const [hovered, setHovered] = useState(false)


    // Make the bubble float and follow the mouse
    useFrame((state) => {
        if (sphere.current) {
            sphere.current.position.y = THREE.MathUtils.lerp(sphere.current.position.y, (state.mouse.x * Math.PI) / 4, 0.05)
            sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, (state.mouse.y * Math.PI) / 4, 0.05)
        }
    })

    // Springs for color and overall looks, this is state-driven animation
    // React-spring is physics based and turns static props into animated values
    const [{ wobble, coat, color, ambient, env }] = useSpring(
        {
            //transitie van wit naar zwart en omgekeerd + de grote want wordt meegegeven naar scale
            wobble: down ? 2.2 : hovered ? 2.05 : 2,
            //schaduwen op de bol
            coat: mode  ? 0.5 : 0.5,
            //hoe licht van kleur je bubbel is
            ambient: mode ? 1.5 : 1.5,
            env: mode && !hovered ? 0.4 : 1,
            color: !mode ? '#202020' : '#f0f0f0',
            config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
        },
        [mode, hovered, down]
    )

    // Change cursor on hovered state
    useEffect(() => {
        document.body.style.cursor = hovered
            ? 'none'
            : `url('data:image/svg+xml;base64,${btoa(
                `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="${!mode ? '#202020' : '#f0f0f0'}"/></svg>`
            )}'), auto`
    }, [hovered])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
                <a.ambientLight intensity={ambient} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                {/*bol maken*/}
                <a.mesh
                    ref={sphere}
                    scale={wobble}
                    //zet useState true wanneer je over bol hovered
                    onPointerOver={() => setHovered(true)}
                    //zet useState false wanneer je niet meer over de bol hovered
                    onPointerOut={() => setHovered(false)}
                    //zet useState true wanneer je op de bol klikt
                    onPointerDown={() => setDown(true)}
                    //zet useState (setDown) false wanneer je stopt met de klik
                    //zet useState (setMode) het omgekeerde dan wat het was (!mode)
                    onPointerUp={() => {
                        setDown(false)
                        // Toggle mode between dark and bright
                        //modes = true of false
                        setMode(!mode)
                        setBg({ background: !mode ? '#202020' : '#f0f0f0', })
                    }}>
                        {/*eerste element is om bol groter te maken, twee volgende is om de pointiness aan te passen*/}
                    <sphereBufferGeometry args={[1, 50, 50]} />
                    <AnimatedMaterial distort={0.3} color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.4} />
                </a.mesh>
                {/*zorgt voor het 3D effect sunset, dawn, night, warehouse, forest, apartment, studio, city, park, lobby*/}
                <Environment preset="warehouse" />
                <ContactShadows
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -1.6, 0]}
                    opacity={mode ? 0.8 : 0.4}
                    width={15}
                    height={15}
                    blur={2.5}
                    far={1.6}
                />
            </Suspense>
        </>
    )
}
