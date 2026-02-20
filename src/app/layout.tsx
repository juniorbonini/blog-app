import type { Metadata } from "next";
import { LayoutInterface } from "../interfaces/Layout/layout-interface";

export const metadata: Metadata = {
  title: "Criado po Junior Bonini com Next.js",
  description: "Blog criado com Next.js.",
};

export default function RootLayout({ children }: LayoutInterface) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
