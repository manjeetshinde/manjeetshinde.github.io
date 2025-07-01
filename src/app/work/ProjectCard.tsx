import Card from "@/components/Card";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  isPublic?: boolean;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  isPublic = false,
  href,
}: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-8 md:flex-row">
        {/* <Image
          src={image}
          width={320}
          height={120}
          className="rounded-2xl object-cover"
          alt="Project image"
        /> */}

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <hr className="border-gray-600" />
          <p>{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/40 focus:border-white/40 backdrop-blur-md"
              >
                #{tag}
              </li>
            ))}
          </ul>
          {isPublic && (
            <Link
              href={href || "#"}
              target="_blank"
              className="flex w-36 items-center justify-between gap-4 rounded-2xl border-2 border-white/20 px-4 py-4 transition-all duration-300 bg-transparent text-white hover:border-white/40 hover:shadow-[0_0_0_2px_rgba(255,255,255,0.10)] hover:scale-[1.03] focus:border-white/40 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.10)] focus:scale-[1.03] backdrop-blur-md"
            >
              Visit <MdArrowForward size={18} />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
