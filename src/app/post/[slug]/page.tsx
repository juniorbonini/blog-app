import { PostSlugParams } from "@/interfaces/PostSlug/postSlug";
import { findBySlugCached } from "@/lib/posts/queires";
import { PostModel } from "@/models/post/post-model";
import { notFound } from "next/navigation";

export default async function PostSlug({ params }: PostSlugParams) {
  const { slug } = await params;

  let post: PostModel | undefined;

  try {
    post = await findBySlugCached(slug);
  } catch {
    post = undefined;
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <p>{post?.content}</p>
    </div>
  );
}
