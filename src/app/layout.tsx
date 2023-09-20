import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lift Detox Caps | O Emagrecedor N°1 Do Brasil",
  description:
    "O Lift Detox Caps está espalhado por mais de 200 mil casas ao redor do Brasil. Emagrecer não precisa ser cansativo, conheça agora o emagrecedor N°1 do mercado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/Logotipo-Lift-Detox-Black-1-150x150.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/Logotipo-Lift-Detox-Black-1-300x300.png"
          sizes="192x192"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
