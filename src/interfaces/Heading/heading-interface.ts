import { ReactNode } from "react";

export interface HeadingInterface {
  children: ReactNode;
  as?: "h1" | "h2";
  url: string;
  className?: string;
}
