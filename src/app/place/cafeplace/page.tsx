'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import CafePlace from '@/components/unit/place/CafePlace/CafePlace.index';

const CafePlace = dynamic(() => import('../../../components/unit/place/CafePlace/CafePlace.index'), {
  suspense: true,
});

export default function cafeplace() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CafePlace />
      </Suspense>
    </div>
  );
}
