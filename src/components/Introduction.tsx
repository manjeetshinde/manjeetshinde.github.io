import Image from "next/image";
import Card from "./Card";
import { CardContainer } from "./ui/3d-card";

export default function Introduction() {
  return (
    <CardContainer>
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
          <p>Developer | Founder@Procillage</p>
        </Card>
      </Card>
    </CardContainer>
  );
}
