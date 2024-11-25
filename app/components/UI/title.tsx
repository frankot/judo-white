import Image from "next/image";

interface SectionTitleProps {
  title: string;
}

export default function Title({ title }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h1 className="mx-auto w-fit rounded-lg px-7 py-2 text-center font-[family-name:var(--font-storm)] text-5xl">
        {title}
      </h1>
      <div className="-mt-2 flex w-full justify-center">
        <Image
          src="/divider.webp"
          alt="Section divider"
          width={300}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
}