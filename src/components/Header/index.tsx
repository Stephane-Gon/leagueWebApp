import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { actions } from '../../store/store'
import theme from '../../ui/theme'
import { LogoHeading } from '../../ui/globalStyles'
import MainButton from '../MainButton'
import Indicator from './components/Indicator'

const Header = () => {
  const dispatch = useDispatch()
  const { setCurrentTab } = actions.Header
  const { currentTab } = useSelector((state: any) => state.Header)
  const location = useLocation()

  useEffect(() => {
    switch(location.pathname) {
      case '/champions':
        dispatch(setCurrentTab('champions'))
        break;
      case '/items':
        dispatch(setCurrentTab('items'))
        break;
      case '/runes':
        dispatch(setCurrentTab('runes'))
        break;
      case '/lore':
        dispatch(setCurrentTab('lore'))
        break;
      default:
        dispatch(setCurrentTab(''))
    }
  }, [])

  return (
    <HeaderWrapper>
      <LogoBox>
        <LogoHeading to="/">Our Logo</LogoHeading>
      </LogoBox>
      <NavLinks>
        <LinkWrapper>
          <NavLink to="/champions" onClick={() => dispatch(setCurrentTab('champions'))}>Champions</NavLink>
          { currentTab === 'champions' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('items'))}>Items</NavLink>
          { currentTab === 'items' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('runes'))}>Runes</NavLink>
          { currentTab === 'runes' && <Indicator/> }
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="" onClick={() => dispatch(setCurrentTab('lore'))}>Lore</NavLink>
          { currentTab === 'lore' && <Indicator/> }
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
  min-height: 35px;
`