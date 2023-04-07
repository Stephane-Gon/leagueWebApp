import styled from "styled-components"

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
  padding: 5px 50px;
  cursor: pointer;
  align-self: end;
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
`