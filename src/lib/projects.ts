export type Project = {
  /** Project name */
  name: string;
  /** Domain / relationship line, e.g. "Healthcare · Procillage" */
  context: string;
  /** One-sentence description */
  description: string;
  /** Stack shown as understated metadata */
  stack: string[];
  /** Public URL, when one exists */
  href?: string;
  /** "live" — reachable online; "internal" — no public deployment */
  status: "live" | "internal";
  /** Featured on the homepage */
  featured?: boolean;
};

/*
  Project index, roughly most recent first. Descriptions are tightened
  versions of the original portfolio copy — nothing added, nothing invented.
*/
export const projects: Project[] = [
  {
    name: "VentureBridge",
    context: "Startup platform",
    description:
      "Platform connecting startups, teams, and investors for capital raising, idea showcasing, and networking.",
    stack: ["Next.js", "PostgreSQL", "Cloudflare"],
    status: "internal",
    featured: true,
  },
  {
    name: "Beyond Bytes",
    context: "Personal blog",
    description:
      "My blog — notes and thoughts on tech, space exploration, entertainment, and occasional solutions to everyday problems.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    href: "https://beyondbytes.tech",
    status: "live",
    featured: true,
  },
  {
    name: "ERPSkillBridge",
    context: "Education",
    description:
      "Online courses, study material, and certification for ERP systems.",
    stack: ["Next.js", "Tailwind CSS", "Kinde"],
    href: "https://erpskillbridge.com",
    status: "live",
    featured: true,
  },
  {
    name: "Pathox",
    context: "Healthcare · Procillage",
    description:
      "Platform that streamlines workflow in pathology laboratories — data security, processing, and reporting.",
    stack: ["Next.js", "TypeScript", "Azure", "PostgreSQL"],
    href: "https://app.procillage.com/pathox",
    status: "live",
    featured: true,
  },
  {
    name: "Procillage SSO",
    context: "Identity · Procillage",
    description:
      "Single sign-on that grants one set of credentials access to multiple business applications.",
    stack: ["Next.js", "OAuth 2.0", "PostgreSQL", "Azure"],
    href: "https://procillage.com",
    status: "live",
    featured: true,
  },
  {
    name: "Procillage",
    context: "Company · Founder",
    description:
      "The technology company I founded — home of Pathox and a shared single-sign-on platform for business products.",
    stack: [],
    href: "https://procillage.com",
    status: "live",
  },
  {
    name: "Vidyut KRG",
    context: "Green technology",
    description:
      "Marketing site for a startup converting petrol vehicles to hybrid and electric drivetrains.",
    stack: ["Next.js", "Tailwind CSS"],
    href: "https://vidyutkrg.com",
    status: "live",
  },
  {
    name: "Xperience Design System",
    context: "Design system",
    description:
      "A component framework for building sleek, professional web applications.",
    stack: ["React", "TypeScript", "Turborepo"],
    status: "internal",
  },
  {
    name: "YD Car Rentals",
    context: "Travel",
    description:
      "Marketing site presenting a car rental service and its fleet.",
    stack: ["Next.js", "Tailwind CSS", "Kinde"],
    status: "internal",
  },
  {
    name: "Anaya Training Institute",
    context: "Education",
    description:
      "Site for a training institute — courses, study material, success stories, alumni, and contact.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    href: "https://anaya-institute-website.vercel.app",
    status: "live",
  },
  {
    name: "AJ Diagnostics",
    context: "Healthcare",
    description:
      "Web solution streamlining pathology center operations — records, reporting, and administration.",
    stack: ["PHP", "MySQL", "AWS"],
    status: "internal",
  },
  {
    name: "Elosk Technologies",
    context: "Education",
    description:
      "Site for mechanical engineering coaching specializing in CAD, CAM, and CAE.",
    stack: ["WordPress", "PHP"],
    href: "https://elosktech.com",
    status: "live",
  },
  {
    name: "Ditts",
    context: "Mobile",
    description: "Online dating application.",
    stack: ["Flutter", "Firebase"],
    status: "internal",
  },
  {
    name: "NYSEF, India",
    context: "Sports",
    description:
      "Website for a national sports education federation.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    status: "internal",
  },
  {
    name: "Youth Games Council, India",
    context: "Sports",
    description:
      "Website for the Youth Games Council of India.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    href: "https://youthgames.org.in",
    status: "live",
  },
  {
    name: "School Games, India",
    context: "Sports",
    description:
      "Website for school games programs in India.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    status: "internal",
  },
  {
    name: "Sport Development, India",
    context: "Sports",
    description:
      "Website promoting sports development programs in India.",
    stack: ["HTML", "CSS", "PHP"],
    href: "https://sportdevelopmentindia.in",
    status: "live",
  },
  {
    name: "Tirupati Constructions",
    context: "Construction",
    description:
      "Company website showcasing construction projects and services.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://tirupaticonstructions.com",
    status: "live",
  },
  {
    name: "RB Eco Power LLP",
    context: "Energy",
    description:
      "Company website for an eco power business.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://www.rbelect.com",
    status: "live",
  },
  {
    name: "Delta Engineering",
    context: "Education",
    description:
      "Website for an engineering coaching institute.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://cdav.in",
    status: "live",
  },
  {
    name: "Global Shopizie",
    context: "Trade",
    description:
      "Showcase site for a spices import and export business.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "internal",
  },
  {
    name: "ASP Agro Products",
    context: "Agriculture",
    description:
      "Showcase site for agro products.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    status: "internal",
  },
  {
    name: "APSB",
    context: "Education",
    description:
      "Website for a rural school.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "internal",
  },
  {
    name: "Anaya Coaching Classes",
    context: "Education",
    description:
      "Coaching classes site built during the COVID era for remote learning.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "internal",
  },
  {
    name: "MyKarma Services",
    context: "Logistics",
    description:
      "Frontend for a delivery tracking application.",
    stack: ["JavaScript", "API"],
    status: "internal",
  },
  {
    name: "Stock Merchant",
    context: "Finance",
    description:
      "Stock market portfolio site.",
    stack: ["JavaScript"],
    status: "internal",
  },
  {
    name: "Vot",
    context: "Android",
    description:
      "Android app that gathers and organizes voter information for election campaigns.",
    stack: ["Flutter", "Firebase"],
    status: "internal",
  },
  {
    name: "CleanCode",
    context: "Mobile",
    description:
      "Offline barcode scanner app for managing waste collection.",
    stack: ["Flutter", "API"],
    status: "internal",
  },
  {
    name: "Shawn Mendes Lyrics Pro",
    context: "Android",
    description:
      "Android app with lyrics for all Shawn Mendes songs — built for the era when data was expensive and Spotify showed no lyrics.",
    stack: ["Java", "XML"],
    status: "internal",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
