import Link from "next/link";

export function Header() {
  return (
    <header className="w-screen h-20 bg-primary px-5 flex items-center justify-between flex-row">
      <h1 className="text-secondary font-semibold text-2xl font-goudy">Week Chapter</h1>

      <div className="flex items-center justify-center gap-2">
        <Link href={'#'} className="text-secondary">Login</Link>
      </div>
    </header>
  )
}
