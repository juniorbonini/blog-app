import { jsonPostRepository } from "@/repositories/post";
import { PostImage } from "../PostImage";
import { Heading } from "../Heading";

export async function PostList() {
  const posts = await jsonPostRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostImage
              link={{
                href: `${post.slug}`,
              }}
              image={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-300 block text-sm/tight"
                dateTime={post.createdAt}
              >
                {new Date(post.createdAt).toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </time>

              <Heading url="#">{post.title}</Heading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
