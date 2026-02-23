import { Heading } from "@/components/Heading";
import { PostSummaryInterface } from "@/interfaces/PostSummary/postSumary-interface";

export function PostSummary({
  postLink,
  heading = "h2",
  createdAt,
  excerpt,
  title,
}: PostSummaryInterface) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-300 block text-sm/tight"
        dateTime={createdAt}
        title={createdAt}
      >
        {createdAt}
      </time>

      <Heading className="truncate" as={heading} url={postLink}>
        {title}
      </Heading>

      <p>{excerpt}</p>
    </div>
  );
}
