import styled from "styled-components";
import { Link } from 'react-router-dom'

import theme from './theme'

export const LogoHeading = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme().gold3Color};
  font-family:   Beaufort for LOL;
  text-decoration: none;
`