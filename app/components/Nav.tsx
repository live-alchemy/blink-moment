import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <nav
      className={`
      z-50 top-2 lg:top-0 fixed w-full
      grid grid-cols-5 rounded
      lg:rounded-none border-sky-700 lg:border-b-2 bg-black`}
    >
      <Link
        className="col-span-3 col-start-2 flex place-content-center"
        href="/"
      >
        <h1
          className={`
          ${inter.className} font-semibold
          text-lg bg-sky-400 rounded-full py-1 px-4
          lg:text-2xl lg:bg-transparent lg:rounded-none lg:py-4`}
        >
          Blink Moment
        </h1>
      </Link>
    </nav>
  );
}
