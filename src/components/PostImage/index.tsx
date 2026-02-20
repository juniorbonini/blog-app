/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { PostCoverImageInterface } from "@/interfaces/PostImage/postImage-interface";

export function PostImage({ image, link }: PostCoverImageInterface) {
  return (
    <Link
      className={clsx(
        `w-full h-full overflow-hidden rounded-xl`,
        link.className,
      )}
      {...link}
    >
      <Image
        className={clsx(
          `w-full h-full object-cover object-center group-hover:scale-106 transition duration-300`,
          image.className,
        )}
        {...image}
      />
    </Link>
  );
}
