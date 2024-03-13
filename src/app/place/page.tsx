'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import Place from '@/components/unit/place/Place.index';

const Place = dynamic(() => import('../../components/unit/place/Place.index'), {
  suspense: true,
});
// export const dynamic = 'force-dynamic';

export default function place() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Place />
      </Suspense>
    </div>
  );
}
