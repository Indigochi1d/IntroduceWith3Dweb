import {useRecoilState} from "recoil";
import {IsEnteredAtom} from "../stores";
import {Html, useProgress} from "@react-three/drei";
import styled, {keyframes} from 'styled-components';

const blink = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
`;

const BlurredBackground = styled.div`
    width: 400px;
    height: 400px;
    background-color: red;
    border-radius: 50%;
    filter : blur(300px);
`;
const Container = styled.div`
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;
const ProgressBar = styled.div`
    font-size: 24px;
    color: #ccc;
    
`
const EnterButton = styled.button`
    animation: ${blink} 1.5s infinite;
    transition-duration: 0.4s;
    font-size: 16px;
    outline: none;
    border: 1px solid #999;
    padding: 8px 18px;
    background-color: transparent;
    color: #ccc;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
        color: #b45104;
        font-weight: bold;
    }
`;
// eslint-disable-next-line react/prop-types
export const Loader = ({isCompleted}) => {
    const [isEntered,setIsEntered] = useRecoilState(IsEnteredAtom);

    const progress = useProgress();
    if(isEntered) return null;
    return(
            <Html center>
                <BlurredBackground/>
                <Container>
                    <ProgressBar>
                        {isCompleted ? 100: progress.progress}%
                    </ProgressBar>
                    <EnterButton onClick={()=>{
                        setIsEntered(true)
                    }}>
                    Enter
                </EnterButton>
                </Container>
            </Html>
    )
}