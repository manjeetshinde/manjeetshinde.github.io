import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

interface NavigationProps {
  title: string;
}

export default function Navigation({ title }: NavigationProps) {
  return (
    <nav className="flex items-center gap-x-8">
      <Link
        href="/"
        className="rounded-2xl border-2 border-white/15 p-4 transition-all duration-300 bg-black/60 backdrop-blur-md hover:border-blue-200/40 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)] hover:scale-105 focus:border-blue-200/40 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)] focus:scale-105"
      >
        <MdArrowBack className="text-2xl" />
      </Link>
      <h1 className="text-4xl font-bold">{title}</h1>
    </nav>
  );
}
