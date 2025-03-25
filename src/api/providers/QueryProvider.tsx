'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export function QueryProvider({ children }: React.PropsWithChildren) {
  const client = React.useRef(new QueryClient());

  return (
    <QueryClientProvider client={client.current}>
      {children}
    </QueryClientProvider>
  );
}
