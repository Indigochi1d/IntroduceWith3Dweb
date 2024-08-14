import styled from "styled-components";
import {MainCanvas} from "./components/MainCanvas.jsx";
import {RecoilRoot} from "recoil";


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
  overflow: hidden;
`

function App() {
  return (
    <RecoilRoot>
        <Wrapper>
            <MainCanvas/>
        </Wrapper>
    </RecoilRoot>
  )
}

export default App
