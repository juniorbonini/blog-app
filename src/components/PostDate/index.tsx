import {
  formatDateTime,
  formatDistanceToNow,
} from "@/utils/FormatDate/formate-date";
import { PostDateProps } from "./props";

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-indigo text-sm/tight"
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
