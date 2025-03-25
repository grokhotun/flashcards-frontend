'use client';
import { Profile } from '@/types';
import React from 'react';
import { auth, AuthPayload, Token } from '../client';
import axios from 'axios';

export const useAuth = () => {
  const [loading, setLoading] = React.useState(true);
  const [, setTokens] = React.useState<Token | null>(null);
  const [, setError] = React.useState<Error | null>(null);
  const [profile, setProfile] = React.useState<Profile | null>(null);

  const login = React.useCallback(async (payload: AuthPayload) => {
    try {
      setLoading(true);
      const tokens = await auth.login(payload);
      const profile = await auth.profile();
      setProfile(profile.data);
      setTokens(tokens.data);
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = React.useCallback(() => {}, []);
  const logout = React.useCallback(() => {}, []);

  return { login, register, logout, loading, profile };
};
