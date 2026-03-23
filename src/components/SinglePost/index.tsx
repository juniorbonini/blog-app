import Image from "next/image";

import { findBySlugCached } from "@/lib/posts/queires";
import { SinglePostProps } from "./props";
import { Heading } from "../Heading";
import { PostDate } from "../PostDate";

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />
        <Heading url="">{post.title}</Heading>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="mb-8 text-xl">{post.excerpt}</p>
      <div>{post.content}</div>
    </article>
  );
}
