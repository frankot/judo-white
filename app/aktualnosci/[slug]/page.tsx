import { hygraphClient } from "../../lib/graphql";
import { Article } from "../../types/types";
import { Metadata } from "next";
import { GET_ALL_SLUGS, GET_ARTICLE } from "../../lib/queries";
import kanji from "../../../public/kanji.png";
import Link from "next/link";
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 60;

export async function generateStaticParams() {
  const { articles } = await hygraphClient.request<{
    articles: { slug: string }[];
  }>(GET_ALL_SLUGS);

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  try {
    const { article } = await hygraphClient.request<{ article: Article }>(
      GET_ARTICLE,
      {
        slug: params.slug,
      },
    );

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found',
      };
    }

    return {
      title: article.title,
      description: article.shortDesc,
    };
  } catch (error) {
    console.error('Error fetching article metadata:', error);
    return {
      title: 'Error',
      description: 'Error loading article',
    };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { article } = await hygraphClient.request<{ article: Article }>(
      GET_ARTICLE,
      { slug: params.slug },
    );

    if (!article) {
      notFound();
    }

    const formattedDate = new Date(article.date).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <main className="relative min-h-screen bg-white pt-10 md:pt-20 overflow-hidden font-[family-name:var(--font-barlow)]">
        <div className="pointer-events-none absolute -right-32 top-1/4 flex items-center justify-center opacity-5">
          <Image
            src={kanji}
            alt="Background kanji"
            className="h-[400px] w-[400px] md:h-[800px] md:w-[800px] object-contain"
          />
        </div>
        <article className="relative mx-auto max-w-4xl px-6 py-16">
          <Image
            src={article.image.url}
            alt={article.title}
            width={1200}
            height={400}
            className="h-[400px] w-full rounded-xl object-cover"
          />
          <div className="relative">
            <h1 className="mt-8 text-4xl font-bold">{article.title}</h1>
            <time className="mt-2 block text-gray-600">{formattedDate}</time>
            <Link
              href="/#news"
              className="font-[family-name:var(--font-barlow)] text-sm md:text-base font-semibold uppercase px-3 md:px-6 py-2 absolute right-0 top-0 bg-stone-950 rounded text-white border border-stone-950 hover:bg-white hover:text-stone-950 transition-all duration-300"
            >
              Wróć
            </Link>
          </div>
          <div className="flex mt-2 md:mt-0 w-full justify-start md:-translate-x-5">
            <Image
              src="/divider.webp"
              alt="Article divider"
              width={500}
              height={200}
              className="object-cover"
            />
          </div>
          <div
            className="prose prose-lg mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.fullContent.html }}
          />
        </article>
      </main>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }
}
