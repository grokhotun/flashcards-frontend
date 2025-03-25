'use client';
import React from 'react';

import { Button, Form, Input, Title } from '@/ui';
import NextLink from 'next/link';
import { auth } from '@/api';

export default function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const register = () => {
    auth.register({ email, password }).then(profile => {
      console.log('profile', profile);
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <Title>Регистрация</Title>
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
            placeholder="Введите пароль"
            value={password}
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </Form.Field>
        <Button onClick={register} className="w-full">
          Зарегистрироваться
        </Button>
      </Form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Уже есть аккаунт?{' '}
        <NextLink href="/login" className="text-blue-600 hover:underline">
          Войти
        </NextLink>
      </p>
    </div>
  );
}
