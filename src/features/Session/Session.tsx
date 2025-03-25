'use server';

import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function Session({ children }: React.PropsWithChildren) {
  const cks = await cookies();
  const rt = cks.get('RefreshToken');
  const token = rt?.value;

  if (token) {
    redirect('/me');
  }

  return <>{children}</>;
}
