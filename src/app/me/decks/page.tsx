'use client';

import { useDecks } from '@/api/hooks';
import { CreateDeck } from '@/features';
import CircularProgress from '@mui/material/CircularProgress';

export default function Cards() {
  const { data, error, loading, refetch } = useDecks();

  if (loading || !data) return <CircularProgress />;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="space-y-2 pb-[56px]">
        {data?.results?.map(result => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
      <CreateDeck onSuccess={refetch} />
    </>
  );
}
