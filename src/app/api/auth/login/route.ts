import { auth, AuthPayload } from '@/api';
import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const credentials: AuthPayload = await request.json();
    const backend = await auth.login(credentials);
    const response = NextResponse.json(backend.data);
    const [at, rt] = backend.headers['set-cookie'] || ['', ''];
    response?.headers.append('Set-Cookie', rt);
    response?.headers.append('Set-Cookie', at);
    return response;
  } catch (e) {
    const error = e as AxiosError;
    return NextResponse.json(error.response?.data, { status: error.status });
  }
}
