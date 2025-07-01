import Card from "./Card";
import { SocialIcons } from "./SocialIcons";

// TODO: Add apple music link

const socialLinks = [
  {
    name: "Twitter",
    icon: "BsTwitter",
    url: "https://twitter.com/Manjeet_Shinde",
    color: "#1da1f2", // Twitter blue
  },
  {
    name: "Instagram",
    icon: "BsInstagram",
    url: "https://www.instagram.com/manjeetshinde.me/",
    color: "#e1306c", // Instagram pink
  },
  {
    name: "Apple Music Playlist",
    icon: "SiApplemusic",
    url: "https://music.apple.com/in/playlist/manjeets-playlist/pl.u-WabZvAjte8dYxNX",
    color: "#fa233b", // Apple Music red
  },
  {
    name: "Email",
    icon: "MdEmail",
    url: "mailto:manjeet.shinde@outlook.com",
    color: "#0072c6", // Outlook blue
  },
];

export default function SocialLinks() {
  return (
    <Card>
      <section className="flex flex-wrap gap-4">
        {socialLinks.map((socialLink) => {
          return <SocialIcons {...(socialLink as any)} key={socialLink.name} />;
        })}
      </section>
    </Card>
  );
}
