/* eslint-disable react-hooks/rules-of-hooks */
import Book from "@/interfaces/book";
import { Pagination, PaginationLimitEnum } from "@/interfaces/pagination";
import { baseApi } from "../baseApi";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/providers/QueryClientProvider";

export default class PaginatedBookUseCas {
  queryKey: string

  constructor(queryKey: string) {
    this.queryKey = queryKey
  }

  async queryPaginationBooks(page: number, limit: PaginationLimitEnum): Promise<Pagination<Book>> {
    const { data } = await baseApi.get(`books/list/${page}?limit=${limit}`)

    return data
  }


  useFindAllPaginated(pate: number, limit: PaginationLimitEnum, initialData: Pagination<Book>): UseQueryResult<Pagination<Book> | null, Error> {
    return useQuery({
      queryKey: [this.queryKey],
      queryFn: () => this.queryPaginationBooks(pate, limit),
      initialData: initialData
    })
  }

  invalidateQuery() {
    return queryClient.invalidateQueries({
      queryKey: [this.queryKey],
    })

  }
}



