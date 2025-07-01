import Link from "next/link";
import Card from "./Card";

export default function Profile() {
  return (
    <Card>
      <h2 className="text-6xl font-bold">Hello there!</h2>

      <div>
        <p>
          I&apos;m Manjeet, the founder of{" "}
          <Link
            href={"https://procillage.com"}
            className="font-semibold tracking-wider underline"
          >
            Procillage
          </Link>
          - my own little tech adventure. I&apos;m a developer who loves
          exploring the intersection of technology, psychology, science, space,
          and everything in between.
        </p>
        <p>When I am not on my computer, I&apos;m nowhere else.</p>
        <p>
          I do believe technology should put people first, with security &
          privacy as top priority.
        </p>
        <p>By the way, stay tuned for what&apos;s next!</p>
      </div>
    </Card>
  );
}
