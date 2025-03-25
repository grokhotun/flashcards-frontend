'use client';
import React from 'react';
import { auth } from '@/api';
import { CircularProgress } from '@mui/material';

export function Auth({ children }: React.PropsWithChildren) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth.profile().then(() => {
      setLoading(false);
    });
  }, []);

  return <>{loading ? <CircularProgress /> : children}</>;
}
