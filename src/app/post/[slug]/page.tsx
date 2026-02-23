import { PostSlugParams } from "@/interfaces/PostSlug/postSlug";
import { findBySlugCached } from "@/lib/posts/queires";
import { Metadata } from "next";

export async function generatedMetaData({
  params,
}: PostSlugParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await findBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlug({ params }: PostSlugParams) {
  const { slug } = await params;

  const post = await findBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
