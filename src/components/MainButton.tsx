import styled from "styled-components"
import theme from '../ui/theme'

interface Props {
  text: string
}

const MainButton = (props: Props) => {
  return (
    <ButtonWrapper>
      {props.text}
    </ButtonWrapper>
  )
}

export default MainButton

const ButtonWrapper = styled.div`
  width: fit-content;
  position: relative;
  padding: 5px 55px;
  cursor: pointer;
  align-self: end;
  color: ${theme().blue1Color};
  font-weight: 500;
  font-style: bold;
  background-image: linear-gradient(
    60deg,
    hsl(198deg 100% 25%) 0%,
    hsl(197deg 100% 28%) 2%,
    hsl(195deg 100% 30%) 8%,
    hsl(193deg 100% 31%) 20%,
    hsl(190deg 100% 33%) 37%,
    hsl(188deg 100% 34%) 56%,
    hsl(185deg 100% 35%) 73%,
    hsl(182deg 100% 36%) 86%,
    hsl(179deg 100% 37%) 94%,
    hsl(175deg 90% 41%) 100%
  );
  transition: all 0.5s ease;
  overflow: hidden;

  &:before {
    content: '';
    background: ${theme().blue7Color};
    width: 20px;
    aspect-ratio: 1;
    position: absolute;
    top: -10px;
    left: -10px;
    display: inline-block;
    transform: rotate(-45deg);
    transition: all 0.2s ease;
  }

  &:after {
    content: '';
    background: ${theme().blue7Color};
    width: 20px;
    aspect-ratio: 1;
    position: absolute;
    bottom: -10px;
    right: -10px;
    display: inline-block;
    transform: rotate(-45deg);
    transition: all 0.2s ease;
  }

  &:hover {
    &::after {
      bottom: -20px;
      right: -20px;
    }
    &::before {
      top: -20px;
      left: -20px;
    }
  }
`