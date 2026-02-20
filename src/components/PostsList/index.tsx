import { jsonPostRepository } from "@/repositories/post";
import { PostImage } from "../PostImage";
import { Heading } from "../Heading";
import { formatDate } from "@/utils/FormatDate/formate-date";

export async function PostList() {
  const posts = await jsonPostRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostImage
              link={{
                href: postLink,
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
                {formatDate(post.createdAt)}
              </time>

              <Heading url={postLink}>{post.title}</Heading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
