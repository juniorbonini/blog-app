import { Container } from "@/components/Container";
import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <h1>home page</h1>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="mt-150 text-5xl py-8 text-center font-bold">
        <p>Footer</p>
      </footer>
    </Container>
  );
}
