import { PostImage } from "@/components/PostImage";
import { PostSummary } from "@/components/PostSummary";
import { findAllPublicPostsCached } from "@/lib/posts/queires";

export async function PostList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
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
            <PostSummary
              postLink={postLink}
              heading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
