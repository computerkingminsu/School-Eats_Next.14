'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import WesternPlace from '@/components/unit/place/WesternPlace/WesternPlace.index';

// const WesternPlace = dynamic(() => import('../../../components/unit/place/WesternPlace/WesternPlace.index'), {
//   suspense: true,
// });

export default function westernplace() {
  return <WesternPlace />;
  // return (
  //   <div>
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <WesternPlace />
  //     </Suspense>
  //   </div>
  // );
}
