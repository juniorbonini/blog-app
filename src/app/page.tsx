import { Suspense } from "react";

import { Header } from "@/components/Header";
import { PostList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeature } from "@/components/PostFeature";

export default function Home() {
  return (
    <Container>
      <Header className="mb-8">Game Guide Hub</Header>
      <Suspense fallback={<SpinLoader />}>
        <PostFeature />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="mt-150 text-5xl py-8 text-center font-bold">
        <p>Footer</p>
      </footer>
    </Container>
  );
}
