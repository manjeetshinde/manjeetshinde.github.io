import Link from "next/link";
import { IconType } from "react-icons/lib";

interface SocialIconsProps {
  name: string;
  url: string;
  icon: IconType;
}

export const SocialIcons = ({ name, url, icon: Icon }: SocialIconsProps) => {
  return (
    <Link href={url} target="_blank" title={name}>
      <div className="rounded-2xl border-2 border-gray-600 p-4 hover:bg-black hover:text-white">
        <Icon className="text-4xl" />
      </div>
    </Link>
  );
};
