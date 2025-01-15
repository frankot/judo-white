"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../components/UI/title";
import Section from "../components/section";


const SvgTopLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 top-0 h-20 w-auto"
    viewBox="0 0 113.79 74.38"
  >
    <path
      d="M10.29,71.15c-.41,3.23-1,4.36-1.5,1.9-.66-3.42-1.53-12.17-2.07-18.87-.79-10.27-1.53-21-3.5-31.46C2.53,19.1,1.78,15.48.9,11.89A21.53,21.53,0,0,1,0,6.06,6.34,6.34,0,0,1,1,2.77,4.84,4.84,0,0,1,4,.78a15.79,15.79,0,0,1,3-.2l2.8,0L15.45.5,26.62.4C36.25.33,46,.42,55.5.28,64.12.15,72.77.2,81.39.21c3.88,0,7.88,0,11.74,0S100.62,0,104.45,0c10.25.2,12,2.24,5.66,2.93-4.81.52-15.86.34-22.11.33-8.94,0-17.84-.08-26.8,0l-32.27,0-16.14,0H6.73a14.88,14.88,0,0,0-1.83.06,2.22,2.22,0,0,0-2,1.39A6.7,6.7,0,0,0,2.71,8c.13,1,.42,2.07.68,3.21s.55,2.22.79,3.34c.52,2.22,1,4.45,1.47,6.68Q7,27.9,8.07,34.67a249.48,249.48,0,0,1,2.49,25.89A66.43,66.43,0,0,1,10.29,71.15Z"
      fill="#111"
    />
  </svg>
);

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

const SvgBottomRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 right-0 h-20 w-auto"
    viewBox="0 0 63.42 77.2"
  >
    <path
      d="M2.25,76.62C0,76.15-.78,75.55,1,75.09a86.79,86.79,0,0,1,13.32-1.4c7.24-.23,14.77-.06,22.25-.78,5.16-.49,10.32-1.22,15.46-2.1a25.91,25.91,0,0,0,3.66-.76A3.72,3.72,0,0,0,58,68.41a8.17,8.17,0,0,0,.41-3.27l.11-3.92c.19-6.77.54-13.61.66-20.3.1-6.05.38-12.13.62-18.18.11-2.73.25-5.54.28-8.25s0-5.27.15-8c.47-7.2,2.57-8.32,3.08-3.88.39,3.4-.09,11.16-.26,15.55-.25,6.28-.56,12.53-.76,18.83-.23,7.55-.53,15.11-.83,22.67l-.23,5.67a14.93,14.93,0,0,1-.31,3.13,5.33,5.33,0,0,1-2.19,3.09c-2.06,1.33-4.16,1.47-6,1.79s-3.76.57-5.64.85C40.69,75.12,34.36,76,28,76.47c-6.08.5-12.17.71-18.27.75A39,39,0,0,1,2.25,76.62Z"
      transform="translate(-0.01 -0.03)"
      fill="#111"
    />
  </svg>
);

const benefits = [
  "Regularne treningi pomagają w budowaniu sprawności fizycznej i ogólnej kondycji, wzmacniają siłę, wytrzymałość, gibkość i koordynację.",
  "Treningi judo są dynamiczne i pełne wyzwań.",
  "Regularność i zaangażowanie w treningu przyczynia się do rozwijania samodyscypliny i odpowiedzialności.",
  "Opanowanie technik obrony i walki, podnosi umiejętność samoobrony, przyczyniając się do wzrostu pewności siebie, przydatnej w sytuacjach zagrożenia.",
  "Judo promuje wartości społeczne, zasady szacunku, honoru i fair play.",
  "Judo to nie tylko walka fizyczna, ale także gra psychologiczna, ucząca strategii, szybkiego myślenia i podejmowania decyzji pod presją.",
  "Judo jest sportem, który można uprawiać w różnym wieku, co czyni go dostępnym dla różnych grup wiekowych.",
];

// const medalisci = [
//   [
//     "/medalisci/medal.jpg",
//     "Maciej Grzyb",
//     "maciej-grzyb",
//     "Wielokrotny medalista Mistrzostw Polski, reprezentant kraju w zawodach międzynarodowych. Specjalizuje się w kategorii -73kg."
//   ],
//   [
//     "/medalisci/medal2.jpg",
//     "Jan Kowalski",
//     "jan-kowalski",
//     "Złoty medalista Mistrzostw Europy Juniorów, dwukrotny Mistrz Polski w kategorii -66kg."
//   ],
//   [
//     "/medalisci/medal3.jpg",
//     "Anna Nowak",
//     "anna-nowak",
//     "Brązowa medalistka Mistrzostw Świata Juniorów, trzykrotna Mistrzyni Polski w kategorii -57kg."
//   ],
//   [
//     "/medalisci/medal4.jpg",
//     "Piotr Wiśniewski",
//     "piotr-wisniewski",
//     "Reprezentant kraju na zawodach międzynarodowych, złoty medalista Pucharu Europy w kategorii -81kg."
//   ],
//   [
//     "/medalisci/medal2.jpg",
//     "Zofia Lewandowska",
//     "zofia-lewandowska",
//     "Mistrzyni Polski Seniorów, srebrna medalistka Pucharu Świata w kategorii -63kg."
//   ],
//   [
//     "/medalisci/medal.jpg",
//     "Tomasz Wójcik",
//     "tomasz-wojcik",
//     "Wielokrotny medalista zawodów krajowych, reprezentant Polski w kategorii -90kg."
//   ],
// ];

export default function ONas() {
  return (
    <main className="bg-white pt-20">
      {/* First Section - About Judo */}
      <div className="w-screen bg-white">
        <div className="z-20 mx-auto flex max-w-7xl flex-col px-6 py-20 lg:flex-row lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex h-fit w-full flex-col justify-center p-6 backdrop-blur-sm lg:w-1/3"
          >
            <SvgTopLeft />
            <h1 className="mb-6 font-[family-name:var(--font-storm)] text-4xl">
              czym jest <span className="text-orange-400">JUDO</span>?
            </h1>
            <p className="font-[family-name:var(--font-barlow)] text-lg">
              Nazwę Judo można tłumaczyć jako &ldquo;drogę do zwinności&rdquo; lub &ldquo;drogę
              ustępowania&rdquo; (JU – zwinnie, ustępować; DO – droga, zasada).
            </p>
            <p className="mt-4 font-[family-name:var(--font-barlow)] text-lg">
              Judo przyczynia się do harmonijnego rozwoju, przekonuje, że nie
              siła i masa ciała, ale szybkość i zręczność decydują w działaniu.
              Jako sport przygotowuje do życia codziennego, wychowuje i
              kształtuje. Pomaga odkryć i rozwijać własne możliwości.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-full items-center justify-center p-10 lg:w-1/3"
          >
            <Image
              src="/kano.png"
              alt="Jigoro Kano"
              className="h-auto max-w-full rounded-xl"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex h-fit w-full flex-col justify-center p-6 lg:w-1/3"
          >
            <SvgBottomRight />
            <h1 className="mb-6 font-[family-name:var(--font-storm)] text-4xl">
              <span className="text-orange-400">jigoro</span> kano
            </h1>
            <p className="font-[family-name:var(--font-barlow)] text-lg">
              Judo pochodzi z Japonii. Jego twórcą był Jigoro KANO (1860-1938).
              Zebrał i ulepszył chwyty jiu-jitsu, eliminując uderzenia,
              kopnięcia i inne elementy walki mogące zagrozić zdrowiu i życiu,
              nadając im nową formę.
            </p>
            <p className="mt-4 font-[family-name:var(--font-barlow)] text-lg">
              Wierzymy, że judo to nie tylko sport, ale droga do
              samodoskonalenia i budowania silnego charakteru.
            </p>
          </motion.div>
        </div>
      </div>
      <Section />

      {/* Second Section - Why Train Judo */}
      <div className="w-screen bg-gray-100">
        <div className="mx-auto max-w-7xl -translate-y-20 px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <Title
              className="-translate-y-10 rounded-t-lg bg-gray-100 pt-5 w-fit mx-auto px-10"
              title="dlaczego  JUDO?"
            />
            <p className="mx-auto max-w-3xl text-left font-[family-name:var(--font-barlow)] text-lg md:text-center md:text-xl">
              Trenowanie judo to doskonały sposób na rozwój fizyczny, mentalny i
              społeczny, a także na zdobycie cennych umiejętności życiowych.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg border border-orange-400 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  index === benefits.length - 1 && benefits.length % 3 !== 0
                    ? "lg:col-start-2"
                    : ""
                }`}
              >
                <p className="text-center font-[family-name:var(--font-barlow)] text-lg">
                  {benefit}
                </p>
                <div className="absolute -bottom-10 -right-32 opacity-5">
                  <SvgSun />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mt-16 w-fit p-4 pt-10 md:text-center"
          >
            <SvgTopLeft />
            <p className="mx-auto max-w-3xl font-[family-name:var(--font-barlow)] text-lg md:text-xl">
              Judo jest odpowiednie dla osób, które lubią wyzwania. Oferuje
              możliwość udziału w zawodach i rywalizacji na różnych poziomach.
              Dla większości z nich, rywalizacja ta jest bardzo ekscytująca i
              motywująca.
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-barlow)] text-lg md:text-xl">
              Judo jest wyjątkowe, dlatego warto rozważyć i spróbować, aby
              przekonać się, że to jest sport dla Ciebie.
            </p>
            <SvgBottomRight />
          </motion.div>
        </div>
      </div>

      {/* Third Section - Our Medalists */}
      <div className="w-screen bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <Title title="nasi medalisci" />
          </motion.div>

          {/* <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:mx-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {medalisci.map(([image, name, slug], index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href={`/o-nas/${slug}`} className="block">
                  <div className="relative h-96">
                    <Image
                      src={image}
                      alt={name}
                      width={400}
                      height={600}
                      className="h-full w-full object-top object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
                      <h3 className="text-center font-[family-name:var(--font-barlow)] text-xl text-white">
                        {name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-[family-name:var(--font-barlow)] text-xl text-gray-600 italic"
          >
            Trwają prace - już w krótce zaprezentujemy naszych Medalistów
          </motion.div>
        </div>
      </div>
    </main>
  );
}
