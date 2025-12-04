import { ArrowRightIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Glow from "./ui/glow";
import { Mockup, MockupFrame } from "./ui/mockup";
import Screenshot from "./ui/screenshot";
import { Section } from "./ui/section";
import Link from "next/link";

const config = {
  heroTitle: "Automate Your Hiring with AI Precision",
  heroDescription:
    "Upload, score, and rank resumes in seconds using NEXML's advanced AI/ML engine, tailored to your target job description and policies.",
  badgeText: "See NEXML in Action!",
  badgeBtn: "Request Demo",
  badgeLink: "/demo",
};

export default function Hero() {
  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">{config.badgeText}</span>
            <Link href={config.badgeLink} className="flex items-center gap-1">
              {config.badgeBtn}
              <ArrowRightIcon className="size-3" />
            </Link>
          </Badge>
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {config.heroTitle}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {config.heroDescription}
          </p>
          <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
            <Button variant="glow" size="lg" asChild>
              <Link href="/articles/product-narrative">Read More</Link>
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link href="/">Get Started</Link>
            </Button>
          </div>

          <div className="relative w-full pt-12">
            <MockupFrame className="animate-appear opacity-0 delay-700" size="small">
              <Mockup type="responsive" className="bg-background/90 w-full rounded-xl border-0">
                <Screenshot
                  srcLight="/hero-dark.png"
                  srcDark="/hero-dark.png"
                  alt="NEXML Playground screenshot"
                  width={1248}
                  height={765}
                  className="w-full"
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
}
