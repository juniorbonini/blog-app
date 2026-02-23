import { jsonPostRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await jsonPostRepository.findAllPublic(),
);

export const findBySlugCached = cache(async (slug: string) => {
  const post = await jsonPostRepository.findBySlug(slug).catch(() => undefined);

  if (!post) {
    notFound();
  }

  return post;
});

export const findPosByIdCached = cache(
  async (id: string) => await jsonPostRepository.findOne(id),
);
