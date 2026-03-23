import { Heading } from "@/components/Heading";
import { PostSummaryInterface } from "@/interfaces/PostSummary/postSumary-interface";
import { PostDate } from "../PostDate";

export function PostSummary({
  postLink,
  heading = "h2",
  createdAt,
  excerpt,
  title,
}: PostSummaryInterface) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />
      <Heading className="truncate" as={heading} url={postLink}>
        {title}
      </Heading>

      <p className="text-secondary">{excerpt}</p>
    </div>
  );
}
