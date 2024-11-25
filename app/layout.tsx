import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  weight: ['100','300','400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-barlow"
})
const storm = localFont({
  src: "./fonts/StormGust.ttf",
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
      <body className={`antialiased  ${storm.variable} ${barlow.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
