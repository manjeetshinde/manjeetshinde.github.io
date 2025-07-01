import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

interface NavigationProps {
  title: string;
}

export default function Navigation({ title }: NavigationProps) {
  return (
    <nav className="flex items-center gap-x-8">
      <Link href="/" className="rounded-2xl border-2 border-gray-600 p-4">
        <MdArrowBack className="text-2xl" />
      </Link>
      <h1 className="text-4xl font-bold">{title}</h1>
    </nav>
  );
}
