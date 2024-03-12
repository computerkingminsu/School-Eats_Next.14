'use client';

import Image from 'next/image';
import * as S from './MapButton.styles';
import Link from 'next/link';

export default function MapButton() {
  return (
    <>
      <S.SubTitle>맛집을 찾아보세요!</S.SubTitle>
      <S.Title>School Eats, 맛집 지도! 🍳 </S.Title>
      <S.Wrapper>
        <S.ButtonWrapper>
          <Link href="/map" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/all.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'전체'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>전체</S.Text>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Link href="/map/koreanmap" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/rice.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'한식'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>한식</S.Text>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Link href="/map/chinesemap" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/dumpling.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'중식'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>중식</S.Text>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Link href="/map/japanesemap" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/sushi.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'일식'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>일식</S.Text>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Link href="/map/westernmap" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/pizza.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'양식'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>양식</S.Text>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Link href="/map/cafemap" style={{ textDecoration: 'none' }}>
            <S.Button>
              <S.ImageWrapper>
                <Image
                  src={
                    '/coffee.png' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'카페'}
                  width={30}
                  height={30}
                />
              </S.ImageWrapper>
            </S.Button>
          </Link>
          <S.Text>카페</S.Text>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
