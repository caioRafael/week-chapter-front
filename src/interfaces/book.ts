import Entity from "./entity";

export default interface Book extends Entity {
  title: string
  sinopse: string
  cover?: string | File
  publishedChapters: number
}
