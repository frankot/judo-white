

// export default function Hero() {
//   return (
//     <div
//       className="h-[40rem] md:h-[50rem] w-full z-20 bg-center bg-cover  bg-fixed font-[family-name:var(--font-barlow)]"
//       style={{ backgroundImage: "url('/bg5.png')" }}
//     >
//       <div className="absolute left-0 top-0 h-[40rem] md:h-[50rem] w-full bg-black bg-opacity-30"></div>

//     </div>
//   );
// }


export default function Hero() {
  return (
    <div
      className="h-[40rem] md:h-[90vh] shadow-xl w-full   z-10 bg-center bg-cover md:bg-fixed  relative"
      style={{ backgroundImage: "url('/bg5.webp')" }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-30 blur-xl "></div>

    </div>
  );
}
