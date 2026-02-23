import { Suspense } from "react";

import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeature } from "@/components/PostFeature";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeature />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer
        className={"w-full h-67 rounded-4xl flex items-center justify-center"}
      >
        <p className="text-3xl">
          Feito e produzido por{" "}
          <Link
            href="https://github.com/juniorbonini/blog-app"
            className={`
                  text-indigo-400 relative inline-block
                   transition-colors duration-300 z-10
                   before:content-[""] before-absolute
                   before-inset-0 before-

               `}
          >
            Junior Bonini
          </Link>
        </p>
      </footer>
    </>
  );
}
