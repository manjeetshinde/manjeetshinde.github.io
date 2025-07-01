import { BsGithub } from "react-icons/bs";
import { GoCommandPalette, GoShieldCheck } from "react-icons/go";
import { PageLink } from "./PageLink";

const pageLinks = [
  // {
  //   title: "Projects",
  //   href: "/projects",
  //   icon: BsFillArrowRightSquareFill,
  // },
  {
    title: "Procillage",
    href: "https://procillage.com",
    icon: GoShieldCheck,
  },
  {
    title: "GitHub",
    href: "https://github.com/manjeetshinde",
    icon: BsGithub,
  },
  {
    title: "Work",
    href: "/work",
    icon: GoCommandPalette,
  },
];

export default function ExploreMore() {
  return (
    <section className="flex flex-col gap-4">
      {pageLinks.map((pageLink) => {
        return <PageLink key={pageLink.title} {...pageLink} />;
      })}
    </section>
  );
}
