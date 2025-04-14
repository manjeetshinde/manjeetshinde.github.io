/* eslint-disable @next/next/no-img-element */
import Card from "./Card";

export default function Introduction() {
  // Determine if we're in production to use the correct image path
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/portfolio" : "";
  const imagePath = `${basePath}/manjeet-shinde.jpg`;

  return (
    <Card>
      <img
        src={imagePath}
        className="m-auto w-full rounded-2xl grayscale hover:grayscale-0"
        alt="Manjeet shinde image"
        loading="eager"
      />
      <Card className="gap-2">
        <h1 className="text-2xl font-semibold">Manjeet Shinde</h1>
        <p>Full Stack Developer | Cloud Engineer</p>
      </Card>
    </Card>
  );
}
