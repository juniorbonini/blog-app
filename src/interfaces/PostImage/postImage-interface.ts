import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";

export interface PostCoverImageInterface {
  image: ComponentProps<typeof Image>;
  link: ComponentProps<typeof Link>;
}
