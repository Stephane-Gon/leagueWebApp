import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const Layout = () => {
  return (
    <MainWrapper>  
      <Header />
      <Outlet />
    </MainWrapper>
  )
}

export default Layout

const MainWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
    110deg,
    hsl(219deg 63% 10%) 0%,
    hsl(219deg 63% 10%) 3%,
    hsl(219deg 63% 10%) 7%,
    hsl(219deg 62% 10%) 14%,
    hsl(219deg 62% 10%) 24%,
    hsl(219deg 61% 10%) 41%,
    hsl(220deg 61% 10%) 66%,
    hsl(220deg 61% 10%) 85%,
    hsl(220deg 60% 10%) 95%,
    hsl(220deg 60% 10%) 100%
  );
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`