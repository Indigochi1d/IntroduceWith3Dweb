import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import {ScrollControls} from "@react-three/drei";
import {Dancer} from "./Dancer.jsx";
import {Suspense} from "react";
import {Loader} from "./Loader.jsx";
import {MovingDom} from "./dom/MovingDom.jsx";
import {useRecoilValue} from "recoil";
import {IsEnteredAtom} from "../stores/index.js";


export const MainCanvas = () => {
    const isEntered = useRecoilValue(IsEnteredAtom);
    const aspectRatio = window.innerWidth / window.innerHeight;
    return (
        <Canvas
            id="canvas"
            gl={{antialias:true}}
            shadows="soft"
            camera={{
                fov:30,
                aspect: aspectRatio,
                near: 0.01,
                far: 1000,
                position: [0,6,12]
            }}
            scene={{background:new THREE.Color("black")}}
        >
            <ScrollControls pages={isEntered ? 8 : 0} damping={0.25}>
                <Suspense fallback={<Loader/>}>
                    <MovingDom/>
                    <Dancer/>
                </Suspense>
            </ScrollControls>
        </Canvas>
    )
}