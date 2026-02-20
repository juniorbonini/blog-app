import { Suspense } from "react";

import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { PostList } from "@/components/PostsList";
import { PostImage } from "@/components/PostImage";
import { Container } from "@/components/Container";
import { SpinLoader } from "@/components/SpinLoader";

export default function Home() {
  return (
    <Container>
      <Header className="mb-8">Game Guide Hub</Header>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostImage
          link={{
            href: "#",
          }}
          image={{
            width: 1200,
            height: 720,
            src: "/images/female-v-badass-3840x2160-20153.jpg",
            priority: true,
            alt: "Image description",
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            12/01/2026 10:00
          </time>

          <Heading as="h1" url="#">
            Cyberpunk 2077 detonado
          </Heading>

          <p>
            Abaixo, você confere um detonado completo das missões obrigatórias
            de Cyberpunk 2077. Basta clicar no nome da missão para conferir o
            guia dela. Os nomes das missões fazem referências a músicas
            brasileiras. Entre parêntesis, colocamos os nomes originais em
            inglês das músicas.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="mt-150 text-5xl py-8 text-center font-bold">
        <p>Footer</p>
      </footer>
    </Container>
  );
}
