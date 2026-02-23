import "@/theme/global.css";
import type { Metadata } from "next";
import { LayoutInterface } from "@/interfaces/Layout/layout-interface";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Game Guide Hub",
};

export default function RootLayout({ children }: LayoutInterface) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header>Game Guide Hub</Header>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
