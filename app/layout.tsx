import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Bebas_Neue, Noto_Serif_Display, Montserrat, Playfair_Display, Text_Me_One  } from "next/font/google";
import "./globals.css";


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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-display",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const textMeOne = Text_Me_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Templates",
  description: "Making better templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
