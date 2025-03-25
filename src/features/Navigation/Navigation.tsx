'use client';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export function Navigation() {
  const router = useRouter();
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation
        showLabels
        onChange={(_, url) => {
          if (url === '/logout') {
            axios.post('/api/auth/logout').then(() => {
              router.push('/login');
            });
            return;
          }
          router.push(url);
        }}>
        <BottomNavigationAction value="/me" label="Главная" />
        <BottomNavigationAction value="/me/decks" label="Колоды" />
        <BottomNavigationAction value="/me/cards" label="Карточки" />
        <BottomNavigationAction value="/logout" label="Выйти" />
      </BottomNavigation>
    </Paper>
  );
}
