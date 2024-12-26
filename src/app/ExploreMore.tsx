import { BsFillArrowRightSquareFill, BsGithub } from "react-icons/bs";
import { PageLink } from "./PageLink";

const pageLinks = [
  // {
  //   title: "Projects",
  //   href: "/projects",
  //   icon: BsFillArrowRightSquareFill,
  // },
  {
    title: "PROCILLAGE",
    href: "https://procillage.com",
    icon: BsFillArrowRightSquareFill,
  },
  {
    title: "Github",
    href: "https://github.com/manjeetshinde",
    icon: BsGithub,
  },
  {
    title: "Work",
    href: "/work",
    icon: BsFillArrowRightSquareFill,
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
