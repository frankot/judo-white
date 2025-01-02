import { hygraphClient } from "../lib/graphql";
import { GET_ALL_ARTICLES } from "../lib/queries";
import { Article } from "../types/types";
import Link from "next/link";
import Title from "../components/UI/title";

const SvgSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-8 h-auto w-60"
    viewBox="0 0 75.57 68.28"
  >
    <path
      d="M35.14,68.18C24,67.53,13,62.1,6.3,53a455.08,455.08,0,0,1,67.09-7.3C67.51,60.72,50.8,69.34,35.14,68.18Z"
      fill="#111"
    />
    <path
      d="M2.69,46.85a31,31,0,0,1-1.45-3.94c12.93-1.7,25.93-2.83,38.93-3.87h0c11.74-.61,23.48-1.34,35.24-1.25-.14,1-.26,2.08-.5,3.09-11.2.42-22.34,1.56-33.5,2.52h0c-12.57,1.71-25.17,3.18-37.6,5.73C3.4,48.39,3,47.62,2.69,46.85Z"
      fill="#111"
    />
    <path
      d="M.51,39.69a26.42,26.42,0,0,1-.47-7c25-3.08,50.2-3.25,75.31-2.6.22.65,0,1.45.22,2V34A594.93,594.93,0,0,0,.65,40.5C.6,40.23.56,40,.51,39.69Z"
      fill="#111"
    />
    <path
      d="M.21,30.36a31.39,31.39,0,0,1,2-7.65c23.05-1.9,46.12-3.63,69.25-4.23a30.58,30.58,0,0,1,3.47,8.91c-24.95-.26-50,.35-74.75,3.84C.21,31,.11,30.65.21,30.36Z"
      fill="#111"
    />
    <path
      d="M2.58,21.72C8.21,8.53,22.39.44,36.39,0c13.35-.45,27.17,5.8,34.33,17.32-22.79.75-45.52,2.59-68.23,4.58Z"
      fill="#111"
    />
  </svg>
);

export const revalidate = 10; // Revalidate every hour

async function getArticles() {
  try {
    const data = await hygraphClient.request<{ articles: Article[] }>(GET_ALL_ARTICLES);
    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function Aktualnosci() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-white py-32">
      <div className="relative w-screen">
        <Link
          href="/aktualnosci"
          className="rounded border hidden md:absolute top-10 left-32 border-black bg-black px-10 py-2 font-[family-name:var(--font-barlow)] font-semibold uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          Cofnij
        </Link>
        <Title title="Wydarzenia" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {articles.map((article) => (
            <Link
              href={`/aktualnosci/${article.slug}`}
              key={article.id}
              className="relative flex flex-col overflow-hidden rounded-tl-xl shadow duration-500 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={article.image.url}
                  alt={article.title}
                  className="h-full w-full object-cover [filter:saturate(75%)]"
                />
                <p className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-sm text-white">
                  {new Date(article.date)
                    .toLocaleDateString("pl-PL", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })
                    .replace(/\./g, "/")}
                </p>
              </div>
              <div className="flex flex-1 flex-col bg-white p-6 backdrop-blur-sm">
                <h2 className="mb-2 font-[family-name:var(--font-barlow)] text-lg font-semibold uppercase">
                  {article.title}
                </h2>
                <p className="flex-1 font-[family-name:var(--font-barlow)] text-gray-700">
                  {article.shortDesc}
                </p>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-2 font-[family-name:var(--font-barlow)] text-sm font-semibold uppercase">
                Dalej
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-10 -right-32 opacity-5">
                <SvgSun />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
