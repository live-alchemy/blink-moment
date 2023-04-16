import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <nav className="z-50 w-full bg-sky-700 top-0 fixed">
      <Link href="/">
        <h1 className={`${inter.className} font-semibold text-2xl py-4 px-4`}>
          Blink Moment
        </h1>
      </Link>
    </nav>
  );
}
