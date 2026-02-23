import { jsonPostRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await jsonPostRepository.findAllPublic(),
);

export const findBySlugCached = cache(
  async (slug: string) => await jsonPostRepository.findBySlug(slug),
);

export const findPosByIdCached = cache(
  async (id: string) => await jsonPostRepository.findOne(id),
);
