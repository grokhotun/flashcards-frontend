'use client';

import React from 'react';
import { Button, Form, Input, Title } from '@/ui';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Profile } from '@/types';

export default function Login() {
  const router = useRouter();

  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Title className="mb-6 text-center text-2xl font-semibold">Войти</Title>
      <Form>
        <Form.Field label="E-mail">
          <Input
            value={email}
            placeholder="Введите email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field label="Пароль">
          <Input
            value={password}
            type="password"
            placeholder="Введите пароль"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </Form.Field>
        <Button
          type="button"
          onClick={() => {
            axios
              .post<Profile & { at: string }>('/api/auth/login/', {
                email,
                password
              })
              .then(() => {
                router.push('/me');
              })
              .catch(e => {
                setError(e.response.data.message);
              });
          }}
          className="w-full">
          Войти
        </Button>
      </Form>
      {error && <p className="my-4 text-sm text-red-600">{error}</p>}
      <p className="mt-4 text-center text-sm text-gray-600">
        Ещё нет аккаунта?{' '}
        <NextLink href="/register" className="text-blue-600 hover:underline">
          Зарегистрироваться
        </NextLink>
      </p>
    </div>
  );
}
