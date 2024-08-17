/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, forwardRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

export const SlotMachine2 = forwardRef(function ({ video, setIs3dLoaded, ...props }, ref) {
    const { nodes, materials } = useGLTF('/Models/slotMachine.glb')

    const screen = useRef()

    const texture = useVideoTexture(video, {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: 0,
        crossOrigin: 'anonymous',
        playsInline: true
    })

    // const scroll = useScroll()

    useEffect(() => {
        if (screen.current) {
            screen.current.material.map = texture;
        }

        const videoElement = texture.source.data;
        if (videoElement) {
            videoElement.play().catch(e => console.error("Error playing video:", e));
        }

        setIs3dLoaded(true)
    }, [texture])

    // useLayoutEffect(() => {
    //     tl.current = gsap.timeline()

    //     console.log(htmlRef.current)

    //     tl.current.to(
    //         slotMachine.current.rotation,
    //         {
    //             duration: 0.5,
    //             y: -Math.PI / 6,
    //             ease: 'sine.inOut'
    //         },
    //         0
    //     )
    //     tl.current.to(
    //         slotMachine.current.position,
    //         {
    //             duration: 0.5,
    //             x: -0.9,
    //             z: -0.5,
    //             ease: 'sine.inOut'
    //         },
    //         0
    //     )
    //     tl.current.to(
    //         slotMachine.current.rotation,
    //         {
    //             duration: 0.45,
    //             y: -Math.PI / 4,
    //             ease: 'sine.inOut'
    //         },
    //         0.5
    //     )
    // }, [])

    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere001.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere002.geometry}
                // material={materials.MapTest}
                position={[0.008, 0.317, -0.235]}
                ref={screen}
            >
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere003.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere004.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere005.geometry}
                material={materials.MapTest}
            />
        </group>
    )
})

useGLTF.preload('/Models/slotMachine.glb')