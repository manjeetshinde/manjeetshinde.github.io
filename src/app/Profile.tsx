import Link from "next/link";
import Card from "./Card";

export default function Profile() {
  return (
    <Card>
      <h2 className="text-6xl font-bold">Hello there!</h2>

      <p>
        I&apos;m Manjeet, the brains behind{" "}
        <Link
          href={"https://procillage.com"}
          className="font-bold tracking-wider underline"
        >
          Procillage
        </Link>
        , my very own tech adventure. I&apos;ve been mixing it up in the world
        of web development for a while, and now I&apos;m all about turning fresh
        ideas into cool software products. We&apos;re super close to dropping
        our first one, and I can&apos;t wait to share it with you guys!
        <br /> <br />
        When I&apos;m not in the tech zone, you&apos;ll find me surfing the web,
        pondering over new{" "}
        <Link
          href={"https://beyondbytes.tech"}
          className="font-bold tracking-wider underline"
        >
          blog posts
        </Link>
        , or just jotting down random thoughts. Keep an eye out for the latest
        from Procillage &ndash; it&apos;s going to be exciting!
      </p>
    </Card>
  );
}
