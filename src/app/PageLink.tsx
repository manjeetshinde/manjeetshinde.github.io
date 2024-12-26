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
      className="flex flex-row items-center justify-between rounded-2xl border-2 border-gray-600 p-4"
    >
      <p className="text-2xl">{title}</p>
      <Icon className="text-4xl" />
    </Link>
  );
};
