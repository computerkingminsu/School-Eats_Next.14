'use client';

import * as S from '../../../components/unit/place/Place.styles';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import KoreanPlace from '@/components/unit/place/KoreanPlace/koreanPlace.index';

// const KoreanPlace = dynamic(() => import('../../../components/unit/place/KoreanPlace/koreanPlace.index'), {
//   suspense: true,
// });

export default function koreanplace() {
  return <KoreanPlace />;
  // <div>
  //   <Suspense
  //     fallback={
  //       <>
  //         <S.Wrapper>
  //           <S.Title>테마별 맛집🍚</S.Title>
  //           <S.SubTitle>스쿨잇츠가 소개하는 맛집 리스트!</S.SubTitle>
  //           <S.ButtonWrapper>
  //             <S.SelectButton>ALL</S.SelectButton>

  //             <Link href="/place/koreanplace">
  //               <S.Button>한식</S.Button>
  //             </Link>
  //             <Link href="/place/chineseplace">
  //               <S.Button>중식</S.Button>
  //             </Link>
  //             <Link href="/place/japaneseplace">
  //               <S.Button>일식</S.Button>
  //             </Link>
  //             <Link href="/place/westernplace">
  //               <S.Button>양식</S.Button>
  //             </Link>
  //             <Link href="/place/cafeplace">
  //               <S.Button>카페</S.Button>
  //             </Link>
  //           </S.ButtonWrapper>
  //         </S.Wrapper>
  //       </>
  //     }
  //   >
  //     <KoreanPlace />
  // </Suspense>
  // </div>
  // );
}
