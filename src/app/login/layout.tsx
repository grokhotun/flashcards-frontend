import React from 'react';
import { Session } from '@/features/Session';

export default function Login({ children }: React.PropsWithChildren) {
  return <Session>{children}</Session>;
}
