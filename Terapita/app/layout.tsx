import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terapia de los Vientos",
  description:
    "Sikus, respiración musicalizada, caminatas y encuentros en la naturaleza."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}