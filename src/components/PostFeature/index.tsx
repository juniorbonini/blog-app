import { Heading } from "@/components/Heading";
import { PostImage } from "@/components/PostImage";
import { PostSummary } from "../PostSummary";

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

        <PostSummary
          postLink={postLink}
          heading="h1"
          createdAt="2026-02-19"
          excerpt="          Abaixo, você confere um detonado completo das missões obrigatórias
            de Cyberpunk 2077. Basta clicar no nome da missão para conferir o
            guia dela. Os nomes das missões fazem referências a músicas
            brasileiras. Entre parêntesis, colocamos os nomes originais em
            inglês das músicas."
          title="Cyberpunk 2077: Detonado Completo das Missões Obrigatórias"
        />
      </section>
    </>
  );
}
