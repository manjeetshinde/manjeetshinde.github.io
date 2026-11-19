type Project = {
  slug: string;
  title: string;
  description: string;
  href?: `https://${string}`;
};

export const projects: Project[] = [
  {
    slug: "leonida-social",
    title: "Leonida.Social",
    description: "An upcoming hangout for the GTA VI community.",
    href: "https://leonida.social/",
  },
  {
    slug: "venturebridge",
    title: "VentureBridge",
    description: "A platform for startups to present ideas, meet investors, and raise capital.",
  },
  {
    slug: "beyond-bytes",
    title: "Beyond Bytes",
    description: "My notes on technology, space exploration, entertainment, and the occasional everyday problem.",
  },
  {
    slug: "erpskillbridge",
    title: "ERPSkillBridge",
    description: "Courses, study materials, and certification for enterprise resource planning.",
  },
  {
    slug: "yd-car-rentals",
    title: "YD Car Rentals",
    description: "A site for presenting a rental fleet and taking reservations.",
  },
  {
    slug: "xperience-design-system",
    title: "Xperience Design System",
    description: "A shared design system for building consistent web applications.",
  },
  {
    slug: "procillage",
    title: "Procillage",
    description: "The company I founded to build software for laboratories and businesses.",
    href: "https://procillage.com",
  },
  {
    slug: "pathox",
    title: "Pathox",
    description: "Software for pathology labs to manage workflows, records, and reporting.",
    href: "https://pahtox.procillage.com/",
  },
  {
    slug: "vidyut-krg",
    title: "Vidyut KRG",
    description: "A site for a startup converting petrol vehicles to hybrid and electric drivetrains.",
  },
  {
    slug: "procillage-sso",
    title: "Procillage SSO",
    description: "One sign-in for multiple business applications.",
  },
  {
    slug: "anaya-training-institute",
    title: "Anaya Training Institute",
    description: "Courses, study materials, and alumni stories for a training institute.",
    href: "https://anaya-institute-website.vercel.app",
  },
  {
    slug: "aj-diagnostics",
    title: "AJ Diagnostics",
    description: "Web software for the day-to-day operations of a pathology center.",
  },
  {
    slug: "elosk-technologies",
    title: "Elosk Technologies",
    description: "A site for mechanical engineering courses in CAD, CAM, and CAE.",
  },
  {
    slug: "ditts",
    title: "Ditts",
    description: "A mobile dating app.",
  },
  {
    slug: "nysef-india",
    title: "NYSEF, India",
    description: "Event registration and payments for the National Youth Sports and Education Federation.",
  },
  {
    slug: "youth-games-council-india",
    title: "Youth Games Council, India",
    description: "A site for youth sporting events, with online registration and payments.",
    href: "https://youthgames.org.in/",
  },
  {
    slug: "tirupati-constructions",
    title: "Tirupati Constructions",
    description: "A company site showcasing construction services and completed projects.",
    href: "https://tirupaticonstructions.com/",
  },
  {
    slug: "asp-agro-products",
    title: "ASP Agro Products",
    description: "A catalogue of agricultural products, including plant tonics and pesticides.",
  },
  {
    slug: "school-games-india",
    title: "School Games, India",
    description: "A site for school sporting events, registration, and payments.",
  },
  {
    slug: "vot",
    title: "Vot",
    description: "An Android app for gathering and organizing voter information for campaigns.",
  },
  {
    slug: "cleancode",
    title: "CleanCode",
    description: "An offline barcode scanner for tracking waste collection and notifying moderators.",
  },
  {
    slug: "sport-development-india",
    title: "Sport Development, India",
    description: "A site for youth sports programs, event registration, and payments.",
  },
  {
    slug: "global-shopizie",
    title: "Global Shopizie",
    description: "A spice catalogue for an import and export company.",
  },
  {
    slug: "delta-engineering",
    title: "Delta Engineering",
    description: "A static site presenting an engineering institute and its courses.",
  },
  {
    slug: "coaching-classes",
    title: "Coaching Classes",
    description: "Online tests and study materials for school students during the pandemic.",
  },
  {
    slug: "rb-eco-power",
    title: "RB Eco Power LLP",
    description: "A company site presenting electronics products and services to commercial customers.",
    href: "https://rbelect.com/",
  },
  {
    slug: "apsb",
    title: "APSB",
    description: "A site for a rural school’s events, activities, and initiatives.",
  },
  {
    slug: "mykarma-services",
    title: "MyKarma Services",
    description: "A frontend for a delivery tracking service.",
  },
  {
    slug: "stock-merchant",
    title: "Stock Merchant",
    description: "A portfolio and educational site about stock-market investing.",
  },
  {
    slug: "shawn-mendes-lyrics-pro",
    title: "Shawn Mendes Lyrics Pro",
    description: "An Android lyrics app from the days before streaming apps routinely showed lyrics.",
  },
];

const featuredSlugs = ["leonida-social", "pathox", "procillage"];

export const featuredProjects = featuredSlugs.map((slug) => {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) throw new Error(`Featured project is missing: ${slug}`);
  return project;
});
