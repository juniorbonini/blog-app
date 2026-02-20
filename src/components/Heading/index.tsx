import { HeadingInterface } from "@/interfaces/Heading/heading-interface";
import clsx from "clsx";
import Link from "next/link";

export function Heading({
  children,
  as: Tag = "h2",
  url,
  className,
}: HeadingInterface) {
  const headingClassMap = {
    h1: "text-4xl/tight sm:text-4xl",
    h2: "text-2xl/tight sm:text-2xl",
  };
  return (
    <Tag className={clsx(headingClassMap[Tag], className)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
