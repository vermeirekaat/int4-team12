import { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Bellenblaas(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/belleblazer.glb')
    return (
        <group ref={group} scale={0.03} position={[0, -2.5, 0]} {...props} dispose={null}>
            <mesh geometry={nodes.Cylinder6.geometry} material={materials['Mat.2']} position={[-2.07, 77.82, 0.32]} />
            <mesh geometry={nodes.Cylinder5.geometry} material={materials.plastiek} position={[-2.07, 176.97, 0.32]} />
            <mesh geometry={nodes.Cylinder4.geometry} material={nodes.Cylinder4.material} position={[-2.07, 135.44, 0.32]} />
            <mesh geometry={nodes.Cylinder3.geometry} material={nodes.Cylinder3.material} position={[-2.07, 156.07, 0.32]} />
            <mesh geometry={nodes.Cylinder2.geometry} material={nodes.Cylinder2.material} position={[-2.07, 16.46, 0.32]} />
            <mesh geometry={nodes.Cylinder1.geometry} material={nodes.Cylinder1.material} position={[-2.07, -3.3, 0.32]} />
            <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[-2.07, 79.7, 0.32]} />
        </group>
    )
}

export default Bellenblaas;