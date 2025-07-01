"use client";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";

const iconMap = {
  BsTwitter,
  BsInstagram,
  MdEmail,
  SiApplemusic,
};

interface SocialIconsProps {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
  color: string;
}

export const SocialIcons = ({ name, url, icon, color }: SocialIconsProps) => {
  const Icon = iconMap[icon];
  return (
    <Link href={url} target="_blank" title={name}>
      <div
        className="rounded-2xl border-2 border-gray-600 p-4 transition-all duration-300 hover:scale-105 focus:scale-105 bg-black/60 backdrop-blur-md"
        style={{}}
        onMouseEnter={(e) => {
          (
            e.currentTarget as HTMLDivElement
          ).style.boxShadow = `0 0 16px 2px ${color}55`;
          (e.currentTarget as HTMLDivElement).style.color = color;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "";
          (e.currentTarget as HTMLDivElement).style.color = "";
        }}
        onFocus={(e) => {
          (
            e.currentTarget as HTMLDivElement
          ).style.boxShadow = `0 0 16px 2px ${color}55`;
          (e.currentTarget as HTMLDivElement).style.color = color;
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "";
          (e.currentTarget as HTMLDivElement).style.color = "";
        }}
      >
        {Icon && <Icon className="text-4xl" />}
      </div>
    </Link>
  );
};
