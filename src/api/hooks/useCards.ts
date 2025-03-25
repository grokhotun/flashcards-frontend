'use client';

import { Card } from '@/types';
import { BackendListResponse } from '@/types/BackendListResponse';
import { useQuery } from '@tanstack/react-query';
import { cards } from '../client';

export const useCards = () => {
  const { data, error, isLoading, refetch } = useQuery<
    BackendListResponse<Card>
  >({
    queryKey: ['cards'],
    queryFn: () =>
      cards
        .all()
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(e => {
          throw e;
        })
  });

  return { data, error, loading: isLoading, refetch };
};
