'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import KoreanPlace from '@/components/unit/place/KoreanPlace/koreanPlace.index';

const KoreanPlace = dynamic(() => import('../../../components/unit/place/KoreanPlace/koreanPlace.index'), {
  suspense: true,
});

export default function koreanplace() {
  return <KoreanPlace />;
}
