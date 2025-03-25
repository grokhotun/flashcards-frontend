import { Auth, Navigation } from '@/features';

export default function Me({ children }: { children: React.ReactNode }) {
  return (
    <Auth>
      {children}
      <Navigation />
    </Auth>
  );
}
