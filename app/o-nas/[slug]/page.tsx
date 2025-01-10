import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const medalistsData = {
  "maciej-grzyb": {
    name: "Maciej Grzyb",
    image: "/medalisci/medal.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Złoty medalista Mistrzostw Polski Seniorów 2023</li>
        <li>Srebrny medalista Pucharu Europy 2022</li>
        <li>Brązowy medalista Mistrzostw Europy U23</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Maciej rozpoczął swoją przygodę z judo w wieku 7 lat. Od samego początku wykazywał niezwykły talent i determinację w dążeniu do celu. Jego systematyczna praca i zaangażowanie zaowocowały licznymi sukcesami na arenie krajowej i międzynarodowej.</p>
    `
  },
  "jan-kowalski": {
    name: "Jan Kowalski",
    image: "/medalisci/medal2.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Złoty medalista Mistrzostw Europy Juniorów 2023</li>
        <li>Dwukrotny Mistrz Polski w kategorii -66kg</li>
        <li>Zwycięzca Pucharu Polski 2022</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Jan trenuje judo od 6 roku życia. Jego talent został szybko zauważony przez trenerów, co zaowocowało intensywnym programem treningowym i licznymi sukcesami w kraju i za granicą.</p>
    `
  },
  "anna-nowak": {
    name: "Anna Nowak",
    image: "/medalisci/medal3.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Brązowa medalistka Mistrzostw Świata Juniorów 2023</li>
        <li>Trzykrotna Mistrzyni Polski w kategorii -57kg</li>
        <li>Złota medalistka Pucharu Europy Juniorów</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Anna rozpoczęła treningi judo w wieku 8 lat. Jej naturalna zwinność i determinacja szybko przyczyniły się do pierwszych sukcesów w zawodach młodzieżowych.</p>
    `
  },
  "piotr-wisniewski": {
    name: "Piotr Wiśniewski",
    image: "/medalisci/medal4.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Złoty medalista Pucharu Europy 2023</li>
        <li>Wielokrotny medalista Mistrzostw Polski</li>
        <li>Reprezentant kraju na zawodach międzynarodowych</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Piotr to zawodnik, który swoją przygodę z judo rozpoczął stosunkowo późno, bo w wieku 12 lat. Mimo to, dzięki ciężkiej pracy i talentowi, szybko dogonił, a następnie przegonił swoich rówieśników.</p>
    `
  },
  "zofia-lewandowska": {
    name: "Zofia Lewandowska",
    image: "/medalisci/medal2.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Mistrzyni Polski Seniorów 2023</li>
        <li>Srebrna medalistka Pucharu Świata</li>
        <li>Zwyciężczyni wielu turniejów międzynarodowych</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Zofia trenuje judo od 9 roku życia. Jej kariera sportowa to przykład systematycznej pracy i nieustannego rozwoju. Obecnie łączy karierę zawodniczą z pracą trenerską z młodzieżą.</p>
    `
  },
  "tomasz-wojcik": {
    name: "Tomasz Wójcik",
    image: "/medalisci/medal.jpg",
    content: `
      <h2>Osiągnięcia Sportowe</h2>
      <ul>
        <li>Wielokrotny medalista Mistrzostw Polski</li>
        <li>Reprezentant kraju w kategorii -90kg</li>
        <li>Zwycięzca turniejów międzynarodowych</li>
      </ul>
      
      <h2>Historia</h2>
      <p>Tomasz to zawodnik, który swoją przygodę z judo rozpoczął w wieku 10 lat. Jego naturalne predyspozycje fizyczne w połączeniu z ciężką pracą zaowocowały licznymi sukcesami na arenie krajowej i międzynarodowej.</p>
    `
  }
};

export default function MedalistPage({ params }: { params: { slug: string } }) {
  const medalist = medalistsData[params.slug as keyof typeof medalistsData];

  if (!medalist) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-white pt-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-1/4 flex items-center justify-center opacity-5">
        <Image
          src="/kanji.png"
          alt="Background kanji"
          width={800}
          height={800}
          className="h-[400px] w-[400px] md:h-[800px] md:w-[800px] object-contain"
        />
      </div>
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative mb-8">
          <Link
            href="/o-nas"
            className="absolute -top-16 left-0 rounded border border-stone-950 bg-stone-950 px-6 py-2 font-[family-name:var(--font-barlow)] font-semibold uppercase text-white transition-all duration-300 hover:bg-white hover:text-stone-950"
          >
            Wróć
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Image
              src={medalist.image}
              alt={medalist.name}
              width={400}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h1 className="mb-6 font-[family-name:var(--font-storm)] lowercase text-4xl">
              {medalist.name}
            </h1>
            <div className="flex w-3/4 ml-4 -mt-4 justify-start -translate-x-5">
              <Image
                src="/divider.webp"
                alt="Divider"
                width={500}
                height={200}
                className="object-cover"
              />
            </div>
            <div 
              className="prose my-6 mb-10 md:mb-20 prose-lg max-w-none font-[family-name:var(--font-barlow)]"
              dangerouslySetInnerHTML={{ __html: medalist.content }}
            />
            
          </div>
        </div>
      </div>
    </main>
  );
}
