import * as S from './Navbar.styles';
import HomeButton from '../../../public/homebutton.svg';
import PlaceButton from '../../../public/placebutton.svg';
import BoardButton from '../../../public/boardbutton.svg';
import MypageButton from '../../../public/mypagebutton.svg';
import MapButton from '../../../public/mapbutton.svg';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../globalstate/globalstate';
import { usePathname } from 'next/navigation';

export default function Navbar(): JSX.Element {
  const login = useRecoilValue(isLoggedIn);
  const pathname = usePathname();

  return (
    <>
      <S.Wrapper>
        <S.ButtonWrapper>
          <S.Button>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <S.Div style={{ color: pathname === '/' ? '#f6786f' : '#000000' }}>
                <HomeButton style={{ fill: pathname === '/' ? '#f6786f' : '#000000' }} />
                <S.LineDiv />홈
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/map" style={{ textDecoration: 'none' }}>
              <S.Div style={{ color: pathname.startsWith('/map') ? '#f6786f' : '#000000' }}>
                <MapButton style={{ fill: pathname.startsWith('/map') ? '#f6786f' : '#000000' }} />
                <S.LineDiv />
                맛집지도
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/place" style={{ textDecoration: 'none' }}>
              <S.Div
                style={{
                  color: pathname === '/place' || pathname.startsWith('/place/') ? '#f6786f' : '#000000',
                }}
              >
                <PlaceButton
                  style={{
                    fill: pathname === '/place' || pathname.startsWith('/place/') ? '#f6786f' : '#000000',
                  }}
                />
                <S.LineDiv />
                맛집투어
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/boards" style={{ textDecoration: 'none' }}>
              <S.Div
                style={{
                  color: pathname === '/boards' || pathname.startsWith('/boards/') ? '#f6786f' : '#000000',
                }}
              >
                <BoardButton
                  style={{
                    fill: pathname === '/boards' || pathname.startsWith('/boards/') ? '#f6786f' : '#000000',
                  }}
                />
                <S.LineDiv />
                커뮤니티
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            {!login ? (
              <Link href="/login" style={{ textDecoration: 'none' }}>
                <S.Div>
                  <MypageButton />
                  <S.LineDiv />
                  마이페이지
                </S.Div>
              </Link>
            ) : (
              <Link href="/mypage" style={{ textDecoration: 'none' }}>
                <S.Div
                  style={{
                    color: pathname === '/mypage' || pathname.startsWith('/mypage/') ? '#f6786f' : '#000000',
                  }}
                >
                  <MypageButton
                    style={{
                      fill: pathname === '/mypage' || pathname.startsWith('/mypage/') ? '#f6786f' : '#000000',
                    }}
                  />
                  <S.LineDiv />
                  마이페이지
                </S.Div>
              </Link>
            )}
          </S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
