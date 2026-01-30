import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schemas";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bolos-contemporaneos.vercel.app"),
  title: {
    default: "E-book Bolos Contemporâneos | Do Zero ao Design Moderno",
    template: "%s | Bolos Contemporâneos",
  },
  description:
    "Domine a arte dos bolos contemporâneos em sua própria cozinha. E-book completo com técnicas de confeitaria moderna, massas estruturadas e decorações minimalistas.",
  keywords: [
    "ebook de confeitaria",
    "bolos modernos",
    "bento cake",
    "naked cake",
    "buttercream",
    "confeitaria contemporânea",
    "guia de bolos",
    "decoração de bolos",
  ],
  authors: [{ name: "Chef Isabella Mendes" }],
  creator: "Bolos Contemporâneos",
  publisher: "Bolos Contemporâneos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bolos-contemporaneos.vercel.app",
    siteName: "E-book Bolos Contemporâneos",
    title: "E-book Bolos Contemporâneos | Do Zero ao Design Moderno",
    description:
      "Domine a arte dos bolos contemporâneos em sua própria cozinha. E-book com 120+ páginas ilustradas passo a passo.",
    images: [
      {
        url: "/hero-cake.png",
        width: 1200,
        height: 630,
        alt: "Bolo contemporâneo com decoração minimalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-book Bolos Contemporâneos",
    description:
      "Domine a arte dos bolos contemporâneos em sua própria cozinha.",
    images: ["/hero-cake.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


import { AdminProvider } from "@/components/admin/AdminProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productSchema = generateProductSchema();
  const faqSchema = generateFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://bolos-contemporaneos.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
