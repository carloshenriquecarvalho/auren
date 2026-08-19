import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-loaded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUREN — Tecnologias Premium para Estética. Tecnologia. Confiança. Propósito.",
  description:
    "A AUREN oferece tecnologias de medicina estética de alto padrão para clínicas no Brasil. Confiança como ativo central, do primeiro atendimento à parceria de longo prazo.",
  keywords: [
    "tecnologias estética",
    "medicina estética",
    "hakon",
    "hegon",
    "CO2",
    "tecnologias estéticas premium",
    "tecnologia médica brasil",
  ],
  openGraph: {
    title: "AUREN — Tecnologias Premium para Estética",
    description:
      "Tecnologia premium com confiança, direção e propósito.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
