import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from '../ui/theme'
import { LogoHeading } from '../ui/globalStyles'
import MainButton from './MainButton'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavMainLinks>
        <LogoBox>
          <LogoHeading>Our Logo</LogoHeading>
        </LogoBox>
        <NavLinks>
          <NavLink to="">Champions</NavLink>
          <NavLink to="">Items</NavLink>
          <NavLink to="">Runes</NavLink>
          <NavLink to="">Lore</NavLink>
        </NavLinks>
      </NavMainLinks>

      <MainButton text="Login" />

    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  background: ${theme().blue7Color};
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavMainLinks = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`

const LogoBox = styled.div`
  
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${theme().gold1Color};
`