import Image from "next/image";
import Link from "next/link";
import logo from "@/app/favicon.ico";

type LogoProps = {
  width?: number;
  height?: number;
  showImage?: boolean;
  showText?: boolean;
};

export default function Logo({ width = 20, height = 20, showImage = true, showText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
      {showImage && <Image src={logo} alt="logo" width={width} height={height} />}
      {showText && <>NEXML</>}
    </Link>
  );
}
