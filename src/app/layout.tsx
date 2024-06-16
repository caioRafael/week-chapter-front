import type { Metadata } from "next";
import { Inter, Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryClientProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const goudy = Goudy_Bookletter_1911({
  weight: "400",
  style: 'normal',
  variable: '--goudy-book',
  preload: false
})

export const metadata: Metadata = {
  title: "Week Chapter",
  description: "Escreva seus os caitulos dos seus livros semanalmente e insentive a leitura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${goudy.variable}`}>
        <QueryProvider>
          <main className="w-screen h-screen flex flex-col">
            <Header />
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
