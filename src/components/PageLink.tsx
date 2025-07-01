import Link from "next/link";
import { IconType } from "react-icons/lib";

interface PageLinkProps {
  title: string;
  href: string;
  icon: IconType;
}

export const PageLink = ({ title, href, icon: Icon }: PageLinkProps) => {
  return (
    <Link
      href={href}
      className="flex flex-row items-center justify-between rounded-2xl border-2 border-gray-600 p-4 transition-all duration-300 hover:shadow-[0_0_16px_2px_rgba(236,72,153,0.25)] hover:scale-[1.03] focus:shadow-[0_0_16px_2px_rgba(236,72,153,0.25)] focus:scale-[1.03] bg-black/60 backdrop-blur-md"
    >
      <p className="text-xl">{title}</p>
      <Icon className="text-3xl" />
    </Link>
  );
};
