import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <Header>Blog</Header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="mt-150 text-5xl py-8 text-center font-bold">
        <p>Footer</p>
      </footer>
    </Container>
  );
}
