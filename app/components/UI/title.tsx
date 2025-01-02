import Image from "next/image";

interface SectionTitleProps {
  title: string;
  className?: string;
  titleClassName?: string;
  dividerClassName?: string;
}

export default function Title({ 
  title, 
  className = "mb-10",
  titleClassName = "mx-auto w-fit rounded-lg px-7 py-2 text-center font-[family-name:var(--font-storm)] text-5xl md:text-6xl",
  dividerClassName = "object-cover w-[300px] md:w-[500px]"
}: SectionTitleProps) {
  return (
    <div className={className}>
      <h1 className={titleClassName}>
        {title}
      </h1>
      <div className="-mt-2 flex w-full justify-center">
        <Image
          src="/divider.webp"
          alt="Section divider"
          width={300}
          height={200}
          className={dividerClassName}
        />
      </div>
    </div>
  );
}