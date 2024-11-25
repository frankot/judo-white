

import Image from "next/image";

export default function Divider() {
  return (
    <div className="w-full mt-16 flex justify-center">
      <Image
        src="/divider.webp"
        alt="Section divider"
        width={400}
        height={200}
        className="object-cover"
      />
    </div>
  );
}
