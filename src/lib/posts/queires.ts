import { jsonPostRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const findAllPublicPostsCached = unstable_cache(
  async () => await jsonPostRepository.findAllPublic(),
);

export const findBySlugCached = unstable_cache(async (slug: string) => {
  const post = await jsonPostRepository.findBySlug(slug).catch(() => undefined);

  if (!post) {
    notFound();
  }

  return post;
});

export const findPosByIdCached = unstable_cache(
  async (id: string) => await jsonPostRepository.findOne(id),
);
