import AuroraBlobBackground from "@/components/Animations/AuroraBlobBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manjeet Shinde | Developer Portfolio",
  description:
    "Developer Portfolio of Manjeet Shinde, showcasing skills in web development, design, and programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="fixed inset-0 -z-20 bg-black"></div>
        {/* <AnimatedSpotlightBackground /> */}
        {/* <AnimatedGradientWavesBackground /> */}
        {/* <AnimatedBackground /> */}
        {/* <ParticlesBackground /> */}
        <AuroraBlobBackground />
        {children}
      </body>
    </html>
  );
}
