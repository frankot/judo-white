import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Artykuł nie został znaleziony</h1>
        <Link
          href="/aktualnosci"
          className="mt-4 inline-block rounded border border-stone-950 bg-stone-950 px-6 py-2 font-[family-name:var(--font-barlow)] font-semibold uppercase text-white transition-all duration-300 hover:bg-white hover:text-stone-950"
        >
          Wróć do listy
        </Link>
      </div>
    </main>
  );
} 