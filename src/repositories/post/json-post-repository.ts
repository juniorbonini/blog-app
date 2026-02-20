import { resolve } from "path";
import { readFile } from "fs/promises";

import { jsonPostRepository } from ".";
import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";

const SIMULATE_WAIT_IN_MS = 5000;
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
    if (SIMULATE_WAIT_IN_MS >= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  private async readFromDisk() {
    const fileContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJsonContent = JSON.parse(fileContent);
    const { posts } = parsedJsonContent;

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findOne(id: string): Promise<PostModel> {
    const post = await this.readFromDisk();
    const foundPost = post.find((post: PostModel) => post.id === id);

    if (!foundPost) {
      throw new Error(`Post com id ${id} não encontrado!`);
    }

    return foundPost;
  }
}

// (async () => {
//   const posts = await jsonPostRepository.findAll();

//   posts.forEach((post) => {
//     console.log(post.id);
//   });
// })();

(async () => {
  const posts = await jsonPostRepository.findOne(
    "1b6a5f57-8a19-4933-91f4-1af678464desd",
  );

  console.log(posts);
})();
