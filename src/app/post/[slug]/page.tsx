import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { PostSlugParams } from "@/interfaces/PostSlug/postSlug";
import { findBySlugCached } from "@/lib/posts/queires";
import { Suspense } from "react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await findBySlugCached(slug).catch(() => undefined);
  return {
    title: post?.title,
    description: post?.excerpt,
  };
}

export default async function PostSlug({ params }: PostSlugParams) {
  const { slug } = await params;
  return (
    <Suspense fallback={<SpinLoader containerClass="min-h-20 mb-46 mt-46" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
