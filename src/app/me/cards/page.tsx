'use client';

import { useCards } from '@/api/hooks';
import { Card } from '@/components';
import { CreateCard } from '@/features';
// import { CreateCard } from '@/features/CreateCard/CreateCard';
import CircularProgress from '@mui/material/CircularProgress';

export default function Cards() {
  const { data, error, loading, refetch } = useCards();

  if (loading || !data) return <CircularProgress />;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="space-y-2 pb-[56px]">
        {data?.results?.map(result => (
          <Card
            key={result.id}
            title={result.front}
            description={result.back}
          />
        ))}
      </div>
      <CreateCard onSuccess={refetch} />
    </>
  );
}
