'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

export default function ReactQueryProvider({ children }: any) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
