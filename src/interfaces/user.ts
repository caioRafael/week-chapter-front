import Entity from "./entity";

export enum UserProfileEnum {
  writer = 'writer',
  reader = 'reader'
}

export interface User extends Entity {
  name: string
  email: string
  password?: string
  profile: UserProfileEnum
  avatar: string
}
