import { queryClient } from "@/providers/QueryClientProvider"
import PaginatedBookUseCas from "./paginatedBooks.usecase"

export const bookQuery = 'books'

export const paginatedBookUseCase = new PaginatedBookUseCas(bookQuery)


