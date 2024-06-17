export enum PaginationLimitEnum {
  Twenty = 20,
  Fifty = 50,
  Hundred = 100,
}
export interface Pagination<T> {
  total: number
  current: number
  next: number
  preview: number
  results: T[]
}
