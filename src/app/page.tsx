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

    </>
  );
}
