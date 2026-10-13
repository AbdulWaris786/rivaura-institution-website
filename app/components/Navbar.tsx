import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-md shadow-indigo-600/30">
            R
          </span>
          <span className="text-xl font-bold tracking-tight text-white">Rivaura</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}