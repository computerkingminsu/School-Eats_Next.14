'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const JapanesePlace = dynamic(() => import('../../../components/unit/place/JapanesePlace/JapanesePlace.index'), {
  suspense: true,
});
// import JapanesePlace from '@/components/unit/place/JapanesePlace/JapanesePlace.index';

export default function japaneseplace() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <JapanesePlace />
      </Suspense>
    </div>
  );
}
