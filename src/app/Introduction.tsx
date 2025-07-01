import Image from "next/image";
import Card from "./Card";

export default function Introduction() {
  return (
    <Card>
      <Image
        src="/manjeet-shinde.jpg"
        width={400} // or your image width
        height={400} // or your image height
        className="m-auto w-full rounded-2xl grayscale hover:grayscale-0"
        alt="Manjeet profile image"
        priority
      />
      <Card className="gap-2">
        <h1 className="text-2xl font-semibold">Manjeet Shinde</h1>
        <p>Full Stack Developer | Cloud Engineer</p>
      </Card>
    </Card>
  );
}
