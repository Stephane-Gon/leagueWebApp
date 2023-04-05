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
    115deg,
    hsl(0deg 0% 2%) 0%,
    hsl(226deg 21% 6%) 7%,
    hsl(226deg 22% 9%) 21%,
    hsl(223deg 27% 11%) 45%,
    hsl(222deg 32% 13%) 68%,
    hsl(221deg 36% 15%) 82%,
    hsl(220deg 39% 17%) 92%,
    hsl(220deg 42% 19%) 100%
  );
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`