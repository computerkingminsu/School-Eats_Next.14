'use client';

import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
// import ChinesePlace from '@/components/unit/place/ChinesePlace/ChinesePlace.index';

const ChinesePlace = dynamic(() => import('../../../components/unit/place/ChinesePlace/ChinesePlace.index'), {
  suspense: true,
});

export default function chineseplace() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ChinesePlace />
      </Suspense>
    </div>
  );
}
