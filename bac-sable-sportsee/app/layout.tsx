import type { Metadata } from "next";
// remplace Geist par Inter
import { Inter } from "next/font/google";
import "./globals.css";

// configure la police Inter
const inter = Inter({
  subsets: ["latin"],
});

// Met à jour les vraies infos du site (pour l'onglet du navigateur)
export const metadata: Metadata = {
  title: "SportSee - Tableau de bord",
  description: "Analysez vos performances sportives en un clin d'œil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // langue en français (fr)
    <html lang="fr">
      {/* Applique la police Inter sur tout le corps du site */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}