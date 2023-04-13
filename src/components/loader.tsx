import styled, { keyframes }  from "styled-components"
import theme from "../ui/theme"

const SpinningLoader = () => {
  return (
    <Loader>
      <LoaderInner>
        <LoaderLineWrap>
          <div className="loader-line"></div>
        </LoaderLineWrap>
        <LoaderLineWrap>
          <div className="loader-line"></div>
        </LoaderLineWrap>
        <LoaderLineWrap>
          <div className="loader-line"></div>
        </LoaderLineWrap>
        <LoaderLineWrap>
          <div className="loader-line"></div>
        </LoaderLineWrap>
        <LoaderLineWrap>
          <div className="loader-line"></div>
        </LoaderLineWrap>
      </LoaderInner>
    </Loader>
  )
}

export default SpinningLoader


const spin = keyframes` 
  0%, 15% { 
    transform: rotate(0); 
  } 
  100% { 
    transform: rotate(360deg); 
}`

const Loader = styled.div`
  background: radial-gradient(#222 10%, #1103211c 70%);
  border-radius: 50%;
  width: 50%;
  aspect-ratio: 1;
  margin: 0 auto;
  position: relative;
  z-index: 99999;
`

const LoaderInner = styled.div`
  height: 60px;
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100px;
`

const LoaderLineWrap = styled.div`
  animation: ${spin} 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;

  &:nth-child(1) { animation-delay: -50ms; }
  &:nth-child(2) { animation-delay: -100ms; }
  &:nth-child(3) { animation-delay: -150ms; }
  &:nth-child(4) { animation-delay: -200ms; }
  &:nth-child(5) { animation-delay: -250ms; }

  .loader-line {
    border: 4px solid transparent;
    border-radius: 100%;
    box-sizing: border-box;
    height: 100px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
  }
    
  &:nth-child(1) .loader-line {
  border-color: ${theme().gold2Color};
    height: 90px;
    width: 90px;
    top: 7px;
  }
  &:nth-child(2) .loader-line {
    border-color: ${theme().gold2Color};
    height: 76px;
    width: 76px;
    top: 14px;
  }
  &:nth-child(3) .loader-line {
    border-color: ${theme().gold3Color};
    height: 62px;
    width: 62px;
    top: 21px;
  }
  &:nth-child(4) .loader-line {
    border-color: ${theme().gold4Color};
    height: 48px;
    width: 48px;
    top: 28px;
  }
  &:nth-child(5) .loader-line {
    border-color: ${theme().gold4Color};
    height: 34px;
    width: 34px;
    top: 35px;
  }

`

