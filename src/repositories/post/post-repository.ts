import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findOne(id: string): Promise<PostModel>;
  findBySlug: (slug: string) => Promise<PostModel>;
}
