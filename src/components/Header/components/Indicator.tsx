import styled from "styled-components"

import theme from "../../../ui/theme"

const Indicator = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
}

export default Indicator

const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  background: ${theme().gold3Color};
  position: relative;

  &:after,
  &:before {
    bottom: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-bottom-color: ${theme().gold3Color};
    border-width: 3px;
    left: 50%;
    margin-left: -3px;
  }

  &:before {
    border-bottom-color:${theme().gold3Color};
    border-width: 4px;
    left: 50%;
    margin-left: -4px;
  }
`