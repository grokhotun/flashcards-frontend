'use client';

import { BackendListResponse } from '@/types/BackendListResponse';
import { useQuery } from '@tanstack/react-query';
import { Deck, deck } from '../client';

export const useDecks = () => {
  const { data, error, isLoading, refetch } = useQuery<
    BackendListResponse<Deck>
  >({
    queryKey: ['cards'],
    queryFn: () =>
      deck
        .all()
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(e => {
          throw e;
        })
  });

  return { data, error, refetch, loading: isLoading };
};
