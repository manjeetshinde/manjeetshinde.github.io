import Image from "next/image";
import Card from "./Card";

export default function Introduction() {
  // Using relative URLs with the Image component is the best approach
  return (
    <Card>
      <Image
        src="/manjeet-shinde.jpg"
        width={400}
        height={400}
        quality={100}
        className="m-auto w-full rounded-2xl grayscale hover:grayscale-0"
        alt="Manjeet shinde image"
        priority
        unoptimized={true}
      />
      <Card className="gap-2">
        <h1 className="text-2xl font-semibold">Manjeet Shinde</h1>
        <p>Full Stack Developer | Cloud Engineer</p>
      </Card>
    </Card>
  );
}
