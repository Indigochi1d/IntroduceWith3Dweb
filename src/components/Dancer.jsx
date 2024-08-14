/*eslint-disable react/no-unknown-property*/
import {useAnimations, useGLTF, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useRecoilValue} from "recoil";
import {IsEnteredAtom} from "../stores/index.js";
import {Loader} from "./Loader.jsx";
import {useFrame} from "@react-three/fiber";


export const Dancer = () => {
    const isEntered = useRecoilValue(IsEnteredAtom)
    const dancerRef = useRef(null);
    const {scene,animations} = useGLTF("/models/dancer.glb");
    const {actions} = useAnimations(animations,dancerRef);
    // eslint-disable-next-line no-unused-vars
    const scroll = useScroll()

    useFrame(()=>{

    });

    useEffect(() => {
        if(!isEntered) return;
        actions["wave"].play();
    }, [actions,isEntered]);

    if(isEntered){
        console.log(1);
        return(
            <>
                <ambientLight intensity={2}/>
                <primitive ref={dancerRef} object={scene} scale={0.05}/>
            </>
        );
    }
    console.log(2);
    return <Loader isCompleted/>
};