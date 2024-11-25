import Title from "./UI/title";

const newsItems = [
  {
    id: 1,
    title: "Sukces na Mistrzostwach Polski",
    date: "2024-02-15",
    image: "https://www.beemat.co.uk/cdn/shop/articles/Judo.jpg?v=1695986886",
    description:
      "Nasi zawodnicy zdobyli 3 złote medale podczas Mistrzostw Polski Juniorów w Judo. Gratulujemy wszystkim uczestnikom!",
  },
  {
    id: 2,
    title: "Nowy nabór do grup początkujących",
    date: "2024-02-10",
    image:
      "https://images.unsplash.com/photo-1542937307-6eeb0267cbab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVkb3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Rozpoczynamy zapisy do grup początkujących dla dzieci w wieku 6-12 lat. Zajęcia startują od marca!",
  },
  {
    id: 3,
    title: "Obóz letni 2024",
    date: "2024-02-05",
    image:
      "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=2322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Zapraszamy na letni obóz judo w górach. W programie: treningi, integracja i mnóstwo dobrej zabawy.",
  },
  {
    id: 4,
    title: "Seminarium z Mistrzem",
    date: "2024-01-30",
    image:
      "https://images.unsplash.com/photo-1602827113876-839bcf3ccb3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGp1ZG98ZW58MHx8MHx8fDA%3D",
    description:
      "W następnym miesiącu odbędzie się specjalne seminarium z udziałem mistrza olimpijskiego. Nie przegap tej wyjątkowej okazji!",
  },
];

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
      fill="#111   "
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

export default function News() {
  return (
    <div className="relative w-screen py-16">
      <Title title="Aktualnosci" />

      <div className="mx-auto grid max-w-7xl  md:grid-cols-4 gap-8 px-4">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col overflow-hidden rounded-tl-xl shadow duration-500 hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover [filter:saturate(75%)]"
              />
              <p className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-sm text-white">
                {item.date}
              </p>
            </div>
            <div className="flex flex-1 flex-col bg-white p-6 backdrop-blur-sm">
              <h2 className="mb-2 font-[family-name:var(--font-barlow)] text-lg font-semibold uppercase">
                {item.title}
              </h2>
              <p className="flex-1 font-[family-name:var(--font-barlow)] text-gray-700">
                {item.description}
              </p>
            </div>
            <button className="absolute bottom-2 right-2 flex items-center gap-2 font-[family-name:var(--font-barlow)] text-sm font-semibold uppercase text-black">
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
            </button>
            <div className="absolute -bottom-10 -right-32 opacity-5">
              <SvgSun />
            </div>
          </div>
        ))}
             
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="font-[family-name:var(--font-barlow)]  uppercase px-6 py-2 bg-black rounded text-white border border-black hover:bg-white hover:text-black transition-all duration-300">
          Więcej
        </button>
      </div>
    </div>
  );
}
