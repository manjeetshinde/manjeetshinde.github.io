import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "VentureBridge",
    description:
      "VentureBridge is a dynamic platform that connects individuals, teams, startups, and investors to facilitate capital raising, idea showcasing, and networking. It offers educational resources and networking opportunities.",
    tags: [
      "Startup",
      "Next.js",
      "TailwindCSS",
      "Vercel",
      "PGSQL",
      "Cloudflare",
    ],
    isPublic: true,
    href: "#",
  },
  {
    title: "Beyond Bytes",
    description:
      "Beyond Bytes is a personal dynamic blog offering my insights & thoughts on tech, space exploration, entertainment and sometimes solutions to everyday problems.",
    tags: ["Social", "Next.js", "TailwindCSS", "Vercel", "PGSQL"],
    isPublic: true,
    href: "https://beyondbytes.tech",
  },
  {
    title: "ERPSkillBridge",
    description:
      "ERPSkillBridge is an educational platform offering online courses, study materials, and certifications in ERP systems, designed to help students and professionals enhance their skills.",
    tags: ["Education", "Next.js", "TailwindCSS", "Vercel", "Kinde"],
    isPublic: true,
    href: "https://erpskillbridge.com",
  },
  {
    title: "YD Car Rentals",
    description:
      "YD Car Rentals is a professional website designed to market car rental services. It helps clients browse available cars, make reservations, and get in touch for more information.",
    tags: ["Travel", "Next.js", "TailwindCSS", "Vercel", "Kinde"],
    isPublic: true,
    href: "#",
  },
  {
    title: "Xperience Design System",
    description:
      "XDS is a design framework for building sleek, professional web applications using streamlined technology stack to ensure consistency and quality across the product.",
    tags: ["Design System", "TurboRepo", "React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Procillage",
    description:
      "My own technology startup delivering cutting-edge solutions for businesses.",
    tags: [],
    isPublic: true,
    href: "https://procillage.com",
  },
  {
    title: "Pathox",
    description:
      "Pathox is digital platform designed to streamline workflow in pathology laboratories, to enhance data security, processing & reporting.",
    tags: [
      "Healthcare",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Azure",
      "PGSQL",
    ],
    isPublic: true,
    href: "https://app.procillage.com/pathox",
  },
  {
    title: "Vidyut KRG",
    description:
      "Vidyut KRG is dedicated to marketing a startup focused on sustainable mobility by converting petrol to hybrid/electric vehicles.",
    tags: ["Green Technology", "NextJS", "Analytics", "TailwindCSS"],
    isPublic: true,
    href: "https://vidyutkrg.com",
  },
  {
    title: "Procillage SSO",
    description:
      "Procillage SSO is a secure authentication system that allows users to access multiple business applications with a single set of login credentials, providing seamless experience.",
    tags: ["IT", "Next.js", "TailwindCSS", "OAuth2.0", "PostgreSQL", "Azure"],
    isPublic: true,
    href: "https://procillage.com",
  },
  {
    title: "Anaya Training Institute",
    description:
      "Comprehensive website for training institute offering online courses, study materials. Showcases success tory, contact information, alumni etc.",
    tags: ["Education", "Next.js", "TailwindCSS", "Vercel", "PGSQL"],
    isPublic: true,
    // href: "https://anayatraining.com",
    href: "https://anaya-institute-website.vercel.app",
  },

  {
    title: "AJ Diagnostics",
    description:
      "A web solution for streamlining pathology center operations, enhancing efficiency, and maintaining customer relationships.",
    tags: ["Healthcare", "PHP", "MySQL", "AWS"],
    isPublic: false,
    href: "https://ajdiagnostics.com",
  },

  {
    title: "Elosk Technologies",
    description:
      "Dynamic website designed to promote mechanical engineering coaching institute specialized in CAD, CAM, and CAE.",
    tags: ["Education", "HTML", "CSS", "PHP", "Wordpress"],
    isPublic: true,
    href: "https://elosktech.com",
  },
  {
    title: "Ditts",
    description:
      "Ditts is an online dating application designed to help users connect with like-minded individuals and build meaningful relationships.",
    tags: ["Mobile", "Flutter", "Firebase"],
  },
  {
    title: "NYSEF, India",
    description:
      "Dynamic website for National Youth Sports And Education Federation, India to promote sport events and activities for youth, facilitates online registrations and payments.",
    tags: ["Sports", "HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Youth Games Council, India",
    description:
      "Website for Youth Games Council, India to promote sport events and activities for youth, facilitates online registrations and payments.",
    tags: ["Sports", "HTML", "CSS", "PHP", "MySQL"],
    isPublic: true,
    href: "https://youthgames.org.in",
  },
  {
    title: "Tirupati Constructions",
    description:
      "Professional website showcasing construction services, completed projects, and contact information, blogs etc. to attract customers.",
    tags: ["Real Estate", "HTML", "CSS", "PHP", "MySQL"],
    isPublic: true,
    href: "https://tirupaticonstructions.com",
  },
  {
    title: "ASP Agro Products",
    description:
      "professional website designed to showcase agricultural products, like tonics and pesticides, with detailed categories and contact information for manufacturing plant.",
    tags: ["E-commerce", "HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    title: "School Games, India",
    description:
      "Website for School Games, India to promote sport events and activities for youth, facilitates online registrations and payments.",
    tags: ["Sports", "HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Vot",
    description:
      "Android application to gathering and organizing voter information for election campaigns.",
    tags: ["Android", "Flutter", "Firebase"],
  },
  {
    title: "CleanCode",
    description:
      "CleanCode is an offline barcode scanner app for managing waste collection, tracking garbage, and notifying moderators efficiently.",
    tags: ["Mobile", "Flutter", "API"],
  },
  {
    title: "Sport Development, India",
    description:
      "Website for Sport Development, India to promote sport events and activities for youth, facilitates online registrations and payments.",
    tags: ["Sports", "HTML", "CSS", "PHP", "MySQL"],
    isPublic: true,
    href: "httpss://sportdevelopmentindia.in",
  },
  {
    title: "Global Shopizie",
    description:
      "Professional website to showcase diverse range of spices for import/export company. Included products categories and detailed contact information",
    tags: ["E-commerce", "HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Delta Engineering",
    description:
      "Static website showcasing and engineering coaching institute designed to attract students and provide information about courses.",
    tags: ["Education", "HTML", "CSS", "PHP"],
    isPublic: true,
    href: "https://cdav.in",
  },
  {
    title: "Coaching Classes",
    description:
      "Website designed to market coaching classes for school students, online tests, and study materials while COVID-19 pandemic.",
    tags: ["Education", "HTML", "CSS", "PHP", "MySQL"],
  },

  {
    title: "RB Eco Power LLP",
    description:
      "RB Eco Power LLP is a dynamic website designed to showcase electronics products and services for commercial customers. Features products, services, testimonials & contact form etc.",
    tags: ["Manufacturing", "HTML", "CSS", "PHP", "MySQL"],
    isPublic: true,
    href: "https://www.rbelect.com",
  },
  {
    title: "APSB",
    description:
      "APSB is website designed to for rural school showcasing school events, activities & initiatives.",
    tags: ["Education", "HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "MyKarma Services",
    description:
      "MyKarma is frontend solution crafted to effectively market an application for tracking and managing delivery of goods.",
    tags: ["Marketing", "HTML", "CSS", "PHP"],
  },
  {
    title: "Stock Merchant",
    description:
      "Stock Merchant is personal portfolio website designed to attract customers & educate potential clients about stock market investment opportunities.",
    tags: ["Finance", "HTML", "CSS", "PHP", "MySQL"],
    isPublic: false,
  },
  {
    title: "Shawn Mendes Lyrics Pro",
    description:
      "Android app to display lyrics of all Shawn Mendes songs. Designed for era when data was expensive and lyrics were not available in Spotify.",
    tags: ["Android", "Java", "XML"],
  },
];

export default function ProjectList() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
