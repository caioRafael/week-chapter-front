'use client'

import Book from "@/interfaces/book"
import { Pagination, PaginationLimitEnum } from "@/interfaces/pagination"
import { paginatedBookUseCase } from "@/services/books"
import { useState } from "react"
import { BookCard } from "./book/BookCard"

interface BookListProps {
  booksInitialData: Pagination<Book>
}

export function BookList(props: BookListProps) {
  const { booksInitialData } = props
  const [page, setPage] = useState<number>(booksInitialData.current)
  const [limit, setLimit] = useState<PaginationLimitEnum>(PaginationLimitEnum.Twenty)
  const {
    data
  } = paginatedBookUseCase.useFindAllPaginated(page, limit, booksInitialData)
  return (
    <div>
      <b>teste</b>
      {data?.results.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
