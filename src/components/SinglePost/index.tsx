import { findBySlugCached } from "@/lib/posts/queires";
import { SinglePostProps } from "./props";

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugCached(slug);
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
