import { Suspense } from "react";

import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeature } from "@/components/PostFeature";

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
