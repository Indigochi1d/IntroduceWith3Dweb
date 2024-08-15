import {useRecoilValue} from "recoil";
import {IsEnteredAtom} from "../../stores/index.js";
import {useRef} from "react";
import styled from "styled-components";
import {Scroll, useScroll} from "@react-three/drei";
import soccer from "/src/assets/images/soccer.png";
import workout from "/src/assets/images/workout.png";
import game from "/src/assets/images/game.png";
import {useFrame} from "@react-three/fiber";
import {GlobalFontStyle} from "../../assets/fontSetting.js";


export const MovingDom = () => {
    const isEntered = useRecoilValue(IsEnteredAtom);
    const article01Ref = useRef(null);
    const article02Ref = useRef(null);
    const article03Ref = useRef(null);
    const article04Ref = useRef(null);
    const article08Ref = useRef(null);

    const scroll = useScroll();

    useFrame(() => {
        if (!isEntered ||
            !article01Ref.current
            || !article02Ref.current
            || !article03Ref.current
            || !article04Ref.current
            || !article08Ref.current) {
            return;
        }
        article01Ref.current.style.opacity = `${1 - scroll.range(0, 1 / 8)}`;
        article02Ref.current.style.opacity = `${1 - scroll.range(1 / 8, 1 / 8)}`;
        article03Ref.current.style.opacity = `${scroll.curve(2 / 8, 1 / 8)}`;
        article04Ref.current.style.opacity = `${scroll.range(3 / 8, 1 / 8)}`;
        article08Ref.current.style.opacity = `${scroll.range(7 / 8, 1 / 8)}`;
    })

    if (!isEntered) {
        return null;
    }
    return (

        <Scroll html>
            <GlobalFontStyle/>
            <ArticleWrapper ref={article01Ref}>
                <LeftBox>
                    <span>
                        안녕하세요.
                        <br/>제 이름은 김범수입니다.
                    </span>
                </LeftBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article02Ref}>
                <RightBox>
                    <span>
                        저는 세종대학교 컴퓨터공학과 19학번 김범수입니다.
                        <br/>
                        웹 프론트엔드 개발하는 것을 좋아하는 개발자이며
                        <br/>
                        3D웹을 만드는 것에 관심이 있습니다.
                    </span>
                </RightBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article03Ref}>
                <span>
                    저는 축구, 헬스, 게임을 취미로 가지고 즐겨하고 있습니다.
                </span>
                <br/>
                <PicturesWrapper>
                    <Pictures src={soccer} alt="soccer"/>
                    <Pictures src={workout} alt="soccer"/>
                    <Pictures src={game} alt="soccer"/>
                </PicturesWrapper>
            </ArticleWrapper>
            <ArticleWrapper className="height-4" ref={article04Ref}>
                <RightBox>
                    <p>
                        <b>소개123123123</b>

                    </p>
                </RightBox>
            </ArticleWrapper>

            <ArticleWrapper ref={article08Ref}>
                <Footer>
                     감사합니다!
                </Footer>
            </ArticleWrapper>
        </Scroll>
    );
}

const ArticleWrapper = styled.div`
    font-family:'PTAnboR',sans-serif ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 100vw;
    height: 100vh;

    &.height-4 {
        height: 400vh;
    }

    background: transparent;
    color: #ffffff;
    font-size: 24px;
    padding: 40px;

`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    min-width: fit-content;
    height: 400px;

    & > span:nth-of-type(1) {
        font-size: 32px;
    }

    & > span:nth-of-type(2) {
        font-size: 48px;
    }

    & > span:nth-of-type(3) {
        font-size: 16px;
    }

    & > span:nth-of-type(4) {
        font-size: 24px;
    }

    & > span:nth-of-type(5) {
        font-size: 28px;
    }
`;

const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    min-width: fit-content;
    height: 400px;

    & > span:nth-of-type(1) {
        font-size: 32px;
        font-weight: 400;
    }

    & > span:nth-of-type(2) {
        font-size: 48px;
        font-weight: 500;
    }

    & > span:nth-of-type(3) {
        font-size: 16px;
        font-weight: 600;
    }

    & > span:nth-of-type(4) {
        font-size: 24px;
        font-weight: 700;
    }

    & > span:nth-of-type(5) {
        font-size: 28px;
        font-weight: 800;
    }`;

const PicturesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 200px;
    justify-content: space-between;
`;
const Pictures = styled.img`
    width: 200px;
    height: 200px;
    background: transparent;
`;

const Footer = styled.div`
    width: 200px;
    height: 200px;
`

