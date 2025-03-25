import { Profile } from '@/types';

declare module 'next-auth' {
  interface User extends Profile {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    at: string;
  }
}
