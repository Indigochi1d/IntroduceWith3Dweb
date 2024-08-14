import {useRecoilValue} from "recoil";
import {IsEnteredAtom} from "../../stores/index.js";
import {useRef} from "react";
import styled from "styled-components";
import {Scroll} from "@react-three/drei";

export const MovingDom = () => {
    const isEntered = useRecoilValue(IsEnteredAtom);
    const article01Ref = useRef(null);
    const article02Ref = useRef(null);
    const article03Ref = useRef(null);
    const article04Ref = useRef(null);
    const article05Ref = useRef(null);
    const article06Ref = useRef(null);
    const article07Ref = useRef(null);
    const article08Ref = useRef(null);

    if(!isEntered){
        return null;
    }

    return(
        <Scroll html>
            <AritlceWrapper ref={article01Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article02Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article03Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article04Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article05Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article06Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article07Ref}>
            </AritlceWrapper>
            <AritlceWrapper ref={article08Ref}>
            </AritlceWrapper>
        </Scroll>
    );
}

const AritlceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 100vw;
    height:100vh;
    background: transparent;
    color: #ffffff;
    font-size: 24px;
    padding: 40px;
    
`