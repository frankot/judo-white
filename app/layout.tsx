import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { Barlow } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
const barlow = Barlow({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});
const storm = localFont({
  src: "./fonts/voxbox.ttf",
  variable: "--font-storm",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Judo Drako",
  description: "Judo drako",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`antialiased ${storm.variable} ${barlow.variable}`}>
        <Nav /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
