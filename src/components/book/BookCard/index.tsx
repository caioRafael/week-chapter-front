import { Card, CardTitle } from "@/components/ui/card";
import Book from "@/interfaces/book";
import Image from "next/image";
import { Image as Img } from 'lucide-react'

interface BookCardProps {
  book: Book
}

export function BookCard(props: BookCardProps) {
  const { book } = props
  return (
    <Card className="flex flex-col gap-4 p-3">
      <CardTitle className="font-goudy">
        {book.title}
      </CardTitle>
      <div className="flex flex-col gap-3">
        {book.cover ? <Image
          src={book.cover as string}
          width={150}
          height={150}
          alt={`capa do livro ${book.title}`}
        /> : <Img className="w-[150px] h-[150px]" />}
        <b>{book.author.name}</b>
      </div>
    </Card>
  )
}
