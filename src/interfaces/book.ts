import { Category } from "./category";
import Entity from "./entity";
import { User } from "./user";

export default interface Book extends Entity {
  title: string
  sinopse: string
  cover?: string | File
  publishedChapters: number
  authorId: string
  author: User,
  categoryId: string,
  category: Category
}
