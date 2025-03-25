import { BackendListResponse, Card, Profile } from '@/types';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

let counter = 0;

client.interceptors.response.use(
  r => r,
  async e => {
    if (e.response.status === 401) {
      if (counter > 3) return Promise.reject(e);
      counter++;
      await auth.refresh();
      return client.request(e.config);
    }
    return Promise.reject(e);
  }
);

export type Token = { accessToken: string; refreshToken: string };
export type AuthPayload = { email: string; password: string };

const auth = {
  register: (payload: AuthPayload) => {
    return client.post<Profile>('/auth/register/', payload);
  },
  login: (payload: AuthPayload) => {
    return client.post<Profile & { at: string }>('/auth/login/', payload);
  },
  logout: () => {
    return client.post('/auth/logout/');
  },
  profile: () => {
    return client.get<Profile>('/auth/profile/');
  },
  refresh: () => {
    return client.post('/auth/refresh/');
  }
};

export type CreateCardPayload = {
  front: string;
  back: string;
  deck: number;
};

const cards = {
  all: () => {
    return client.get<BackendListResponse<Card>>('/cards/');
  },
  create: (payload: CreateCardPayload) => {
    return client.post<Card>('/cards/', payload);
  },
  update: (id: number, payload: Partial<CreateCardPayload>) => {
    return client.post<Card>(`/cards/${id}`, payload);
  },
  delete: (id: number) => {
    return client.delete<Card>(`/cards/${id}`);
  }
};

export type Deck = {
  id: number;
  name: string;
};

export type CreateDeckPayload = {
  name: string;
};

const deck = {
  all: () => {
    return client.get<BackendListResponse<Deck>>('/decks/');
  },
  create: (payload: CreateDeckPayload) => {
    return client.post<Deck>('/decks/', payload);
  },
  update: (id: number, payload: Partial<CreateDeckPayload>) => {
    return client.post<Deck>(`/decks/${id}`, payload);
  },
  delete: (id: number) => {
    return client.delete<Deck>(`/decks/${id}`);
  }
};

export { auth, cards, deck, client };
