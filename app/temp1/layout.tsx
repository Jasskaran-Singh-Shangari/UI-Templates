import "../globals.css";

import { Geist, Geist_Mono, Jost, Bebas_Neue } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost", // optional but recommended
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only has 400
  variable: "--font-bebas", // optional (recommended)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-neutral-100">
      {children}
    </div>
  );
}
