import {
  formatDate,
  formatRelativeDate,
} from "@/utils/FormatDate/formate-date";
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
        title={formatRelativeDate(createdAt)}
      >
        {formatDate(createdAt)}
      </time>

      <Heading as={heading} url={postLink}>
        {title}
      </Heading>

      <p>{excerpt}</p>
    </div>
  );
}
