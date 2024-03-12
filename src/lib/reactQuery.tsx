'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { PropsWithChildren, useState } from 'react';

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  // const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
