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
      <div className="rounded-2xl border-2 border-gray-600 p-4 transition-all duration-300 hover:bg-pink-500/10 hover:text-pink-400 hover:shadow-[0_0_16px_2px_rgba(236,72,153,0.25)] hover:scale-105 focus:shadow-[0_0_16px_2px_rgba(236,72,153,0.25)] focus:scale-105 bg-black/60 backdrop-blur-md">
        <Icon className="text-4xl" />
      </div>
    </Link>
  );
};
