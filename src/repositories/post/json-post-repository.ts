import { resolve } from "path";
import { readFile } from "fs/promises";

import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";

const SIMULATE_WAIT_IN_MS = 200;
const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "post.json",
);

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;

    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts: PostModel[] = await this.readFromDisk();

    return posts.filter((post) => post.published === true);
  }

  async findOne(id: string): Promise<PostModel> {
    const post = await this.findAllPublic();
    const foundPost = post.find((post) => post.id === id);

    if (!foundPost) {
      throw new Error(`Post com id ${id} não encontrado!`);
    }

    return foundPost;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
      throw new Error("Post não encontrado");
    }
    return post;
  }
}
