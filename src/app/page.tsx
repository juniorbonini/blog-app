import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="text-5xl py-8 text-center font-bold">
        <p>Footer</p>
      </footer>
    </>
  );
}
