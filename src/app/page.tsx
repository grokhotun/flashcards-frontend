import NextLink from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <NextLink
        href="/login"
        className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-indigo-700">
        Начать
      </NextLink>
    </div>
  );
}
