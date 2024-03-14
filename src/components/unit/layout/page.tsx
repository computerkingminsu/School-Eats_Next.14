'use client';

import styled from 'styled-components';
import LayoutHeader from './header/LayoutHeader';
import LayoutFooter from './footer/LayoutFooter';
import SideBanner from './sidebanner/SideBanner';
import Navbar from './navbar/Navbar';
import ScrollButton from './scrollbutton/ScrollButton';

import { usePathname } from 'next/navigation';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  /* height: 3000px; */
  @media only screen and (max-width: 500px) {
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const LeftWrapper = styled.div`
  width: calc((100vw - 500px) / 2);
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
`;

const RightWrapper = styled.div`
  width: calc((100vw - 500px) / 2);
  background-color: #f9f9f9;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login/';
  const isSignupPage = pathname === '/signup/';
  const isMyPage = pathname === '/mypage/' || pathname.startsWith('/mypage/');
  const isNoticePage = pathname === '/notice/';
  const isGuidePage = pathname === '/guide/';
  const isSearchPage = pathname === '/search/';
  const isFeedbackPage = pathname === '/feedback/';
  const isRequestPage = pathname === '/request/';
  const isResetPasswordPage = pathname === '/resetpassword/';
  const isPlaceDetailPage =
    // pathname !== '/place/koreanplace/' &&
    // pathname !== '/place/chineseplace/' &&
    // pathname !== '/place/japaneseplace/' &&
    // pathname !== '/place/cafeplace/' &&
    // pathname !== '/place/westernplace/';
    pathname.startsWith('/place/%');
  const isBoardsDetailPage = /^\/boards\/.+/.test(pathname);

  const showLayout = !isLoginPage && !isSignupPage;
  return (
    <Wrapper>
      <LeftWrapper>
        <SideBanner />
      </LeftWrapper>
      <MainWrapper>
        {showLayout &&
          !isBoardsDetailPage &&
          !isMyPage &&
          !isNoticePage &&
          !isGuidePage &&
          !isSearchPage &&
          !isFeedbackPage &&
          !isPlaceDetailPage &&
          !isResetPasswordPage &&
          !isRequestPage && <LayoutHeader />}

        <Body>{props.children}</Body>
        {showLayout && !isSearchPage && <LayoutFooter />}
        <ScrollButton />
        {showLayout && <Navbar />}
      </MainWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
}
