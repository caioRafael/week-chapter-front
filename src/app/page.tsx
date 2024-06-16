import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-page flex flex-col items-center p-10">
      <div className="w-5/6 flex flex-row gap-10 items-start justify-start">
        <Image
          src={'/week-chapter-capa.jpg'}
          width={400}
          height={700}
          alt="book"
        />
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="font-goudy font-semibold text-xl text-foreground">Bem vindo ao Week Chapter</h1>
          <p className="w-96">Esta é uma plataforma voltada para insentivar altores a publicarem suas obras, aproximandoos de seu publico. Faça com que seus leitores acompanhem o desenvolvimento de sua obra constantemente.</p>
        </div>
      </div>
    </div>
  );
}
