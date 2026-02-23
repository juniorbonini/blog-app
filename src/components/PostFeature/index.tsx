import { PostImage } from "@/components/PostImage";
import { PostSummary } from "../PostSummary";
import { jsonPostRepository } from "@/repositories/post";
import { formatDate } from "@/utils/FormatDate/formate-date";

export async function PostFeature() {
  const posts = await jsonPostRepository.findAllPublic();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostImage
          link={{
            href: postLink,
          }}
          image={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            priority: true,
            alt: post.title,
          }}
        />

        <PostSummary
          postLink={postLink}
          heading="h1"
          createdAt={formatDate(post.createdAt)}
          excerpt={post.excerpt}
          title={post.title}
        />
      </section>
    </>
  );
}
