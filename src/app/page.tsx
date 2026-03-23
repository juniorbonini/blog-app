import { Suspense } from "react";

import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeature } from "@/components/PostFeature";

export default function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader containerClass="min-h-20 mb-46 mt-46" />}>
        <PostFeature />
        <PostList />
      </Suspense>
    </>
  );
}
