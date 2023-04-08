import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../store/store'
import theme from '../../ui/theme'
import { LogoHeading } from '../../ui/globalStyles'
import MainButton from '../MainButton'
import Indicator from './components/Indicator'

const Header = () => {
  const dispatch = useDispatch()
  const { setCurrentTab } = actions.Header
  const { currentTab } = useSelector((state: any) => state.Header)

  return (
    <HeaderWrapper>
      <LogoBox>
        <LogoHeading>Our Logo</LogoHeading>
      </LogoBox>
      <NavLinks>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('Champions'))}>Champions</NavLink>
          { currentTab === 'Champions' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('Items'))}>Items</NavLink>
          { currentTab === 'Items' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('Runes'))}>Runes</NavLink>
          { currentTab === 'Runes' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('Lore'))}>Lore</NavLink>
          { currentTab === 'Lore' && <Indicator/> }
        </LinkWrapper>
      </NavLinks>

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

const LogoBox = styled.div`
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 35px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${theme().gold1Color};
  transition: all .2s ease-in;
  padding: 0px 15px;

  &:hover {
    color: ${theme().gold3Color};
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`