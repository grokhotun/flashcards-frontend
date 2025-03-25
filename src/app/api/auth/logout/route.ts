import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const cks = await cookies();
    cks.delete('RefreshToken').delete('AccessToken');
    return NextResponse.json(1);
  } catch (error) {
    return NextResponse.json(error);
  }
}
