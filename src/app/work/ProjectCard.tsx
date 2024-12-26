import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import Card from "../Card";

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
                className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900"
              >
                #{tag}
              </li>
            ))}
          </ul>
          {isPublic && (
            <Link
              href={href || "#"}
              target="_blank"
              className="flex w-36 items-center justify-between gap-4 rounded-2xl border-2 border-gray-600 px-4 py-4"
            >
              Visit <MdArrowForward size={18} />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
