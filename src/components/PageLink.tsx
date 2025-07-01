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
      className="flex flex-row items-center justify-between rounded-2xl border-2 border-white/15 p-4 transition-all duration-300 bg-black/60 backdrop-blur-md hover:border-blue-200/40 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)] hover:scale-[1.03] focus:border-blue-200/40 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)] focus:scale-[1.03]"
    >
      <p className="text-xl">{title}</p>
      <Icon className="text-3xl" />
    </Link>
  );
};
