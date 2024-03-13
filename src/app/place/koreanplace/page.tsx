'use client';

import * as S from '../../../components/unit/place/Place.styles';
import React, { Suspense } from 'react';
import Link from 'next/link';
import KoreanPlace from '@/components/unit/place/KoreanPlace/koreanPlace.index';

// const KoreanPlace = dynamic(() => import('../../../components/unit/place/KoreanPlace/koreanPlace.index'), {
//   suspense: true,
// });

export const dynamic = 'force-dynamic';

export default function koreanplace() {
  return <KoreanPlace />;
  //
  // <div>
  //   <Suspense
  //     fallback={
  //       <>
  //       </>
  //     }
  //   >
  //     <KoreanPlace />
  // </Suspense>
  // </div>
  // );
}
