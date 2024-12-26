import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import Card from "./Card";
import { SocialIcons } from "./SocialIcons";

// TODO: Add apple music link

const socialLinks = [
  {
    name: "Twitter",
    icon: BsTwitter,
    url: "https://twitter.com/Manjeet_Shinde",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    url: "https://www.instagram.com/manjeetshinde.me/",
  },
  {
    name: "Apple Music Playlist",
    icon: SiApplemusic,
    url: "https://music.apple.com/in/playlist/manjeets-playlist/pl.u-WabZvAjte8dYxNX",
  },

  {
    name: "Email",
    icon: MdEmail,
    url: "mailto:manjeet.shinde@outlook.com",
  },
];

export default function SocialLinks() {
  return (
    <Card>
      <section className="flex flex-wrap gap-4">
        {socialLinks.map((socialLink) => {
          return <SocialIcons {...socialLink} key={socialLink.name} />;
        })}
      </section>
    </Card>
  );
}
