import { BookList } from "@/components/BookList";
import { PaginationLimitEnum } from "@/interfaces/pagination";
import { paginatedBookUseCase } from "@/services/books";

export default async function Home() {
  const { queryPaginationBooks } = paginatedBookUseCase

  const data = await queryPaginationBooks(1, PaginationLimitEnum.Twenty)
  return (
    <div className="w-screen h-page flex flex-col items-center p-10 gap-4">
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <h1 className="font-goudy text-foreground text-xl font-semibold">Bem vindo ao Week Chapter</h1>
        <p className="w-96 text-foreground font-normal">
          Este é um ambiente voltado para aproximar escritores de seus leitores. Seja um excritor e publique cápitulos de sua obra ocasionalmente. Ou seja um leitor e tenha acessos a diferentes obras literarias e diferentes mundos.
        </p>
      </div>
      <BookList booksInitialData={data} />
    </div>
  );
}
