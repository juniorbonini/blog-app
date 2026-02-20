import { Heading } from "@/components/Heading";
import { PostImage } from "@/components/PostImage";
import { jsonPostRepository } from "@/repositories/post";

export function PostFeature() {
  const slug = "1";
  const postLink = `/post/${slug}`;
  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostImage
          link={{
            href: postLink,
          }}
          image={{
            width: 1200,
            height: 720,
            src: "/images/cyberpunk-2077.jpg",
            priority: true,
            alt: "Image description",
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          ></time>

          <Heading as="h1" url={postLink}>
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
    </>
  );
}
