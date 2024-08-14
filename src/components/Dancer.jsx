/*eslint-disable react/no-unknown-property*/
import {Box, Circle, Points, useAnimations, useGLTF, useScroll, useTexture} from "@react-three/drei";
import {useEffect, useMemo, useRef} from "react";
import {useRecoilValue} from "recoil";
import {IsEnteredAtom} from "../stores/index.js";
import {Loader} from "./Loader.jsx";
import {useFrame, useThree} from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";

let timeLine;
export const Dancer = () => {
    const three = useThree();
    const isEntered = useRecoilValue(IsEnteredAtom)
    const dancerRef = useRef(null);
    const {scene,animations} = useGLTF("/models/dancer.glb");
    const {actions} = useAnimations(animations,dancerRef);
    // eslint-disable-next-line no-unused-vars
    const scroll = useScroll();
    const texture = useTexture("/texture/star.png");

    const {positions} = useMemo(()=> {
        const count = 500;
        const positions = new Float32Array(count * 3);
        for(let i=0;i<count*3;i+=1){
            positions[i]=(Math.random()-0.5) * 25;
        }
        return {positions};
    },[])


    useFrame(()=>{
        if(!isEntered) return null;
        timeLine.seek(scroll.offset * timeLine.duration());
    });

    useEffect(() => {
        if(!isEntered) return;
        actions["wave"].play();
    }, [actions,isEntered]);
    useEffect(() => {
        if(!isEntered) return;
        if(!dancerRef.current) return;
        gsap.fromTo(three.camera.position,{
            x:-5,
            y:5,
            z:5
        },{
            duration:2.5,
            x: 0,
            y: 6,
            z: 12,
        })
        gsap.fromTo(three.camera.rotation,{
            z:Math.PI,
        },{
            duration:2.5,
            z:0
        })
    }, [isEntered,three.camera.position,three.camera.rotation]);
    useEffect(() => {
        if(!isEntered) return;
        if(!dancerRef.current) return;
        timeLine = gsap.timeline();
        timeLine.from(dancerRef.current.rotation,{
            y: -4 * Math.PI,
            duration:4
        },0.5)
    }, [isEntered]);
    if(isEntered){
        return(
            <>
                <primitive ref={dancerRef} object={scene} scale={0.05}/>
                <ambientLight intensity={2}/>
                <rectAreaLight position={[0,10,0]}
                               intensity={30}/>
                <pointLight intensity={45}
                            position={[0,5,0]}
                            castShadow={true}
                            receiveShadow={true}
                />
                <hemisphereLight
                    position={[0,5,0]}
                    intensity={0}
                    groundColor={"lime"}
                    colors="blue"
                />
                <Box position={[0,0,0]} args={[100,100,100]}>
                    <meshStandardMaterial
                        color={"#DC4F00"}
                        side={THREE.DoubleSide}/>
                </Box>
                <Circle
                    castShadow={true}
                    receiveShadow={true}
                    args={[8,32]}
                    rotation-x={-Math.PI/2}
                    position-y={-4.4}
                >
                    <meshStandardMaterial
                    color={"#DC4F00"}
                    side={THREE.DoubleSide}/>
                </Circle>
                <Points positions={positions.slice(0,positions.length/3)}>
                    <pointsMaterial size={0.5}
                                   color={new THREE.Color('#DC4F00')}
                                   sizeAttenuation={true}
                                   depthWrite={true}
                                   alphaMap={texture}
                                   transparent={true}
                                   alphaTest={0.001}
                    />
                </Points>
                <Points positions={positions.slice((positions.length)/3,(positions.length*2)/3)}>
                    <pointsMaterial size={0.5}
                                   color={new THREE.Color('#DC4F00')}
                                   sizeAttenuation={true}
                                   depthWrite={true}
                                   alphaMap={texture}
                                   transparent={true}
                                   alphaTest={0.001}
                    />
                </Points>
                <Points positions={positions.slice((positions.length*2)/3,positions.length)}>
                    <pointsMaterial size={0.5}
                                   color={new THREE.Color('#DC4F00')}
                                   sizeAttenuation={true}
                                   depthWrite={true}
                                   alphaMap={texture}
                                   transparent={true}
                                   alphaTest={0.001}
                    />
                </Points>
            </>
        );
    }
    return <Loader isCompleted/>
};