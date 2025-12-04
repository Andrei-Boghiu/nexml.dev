import { Footer as FooterMain, FooterBottom, FooterColumn, FooterContent } from "./ui/footer";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";

const YEAR = new Date().getFullYear();
const COPYRIGHT = `© ${YEAR} NEXML SRL. All rights reserved`;

type FooterLink = {
  text: string;
  href: string;
};

type FooterColumns = {
  title: string;
  links: FooterLink[];
};

const columns: FooterColumns[] = [
  {
    title: "Product",
    links: [
      { text: "Features", href: "/features" },
      { text: "Pricing", href: "/pricing" },
      { text: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { text: "Feature Requests", href: "/feature-requests" },
      { text: "Report Bug", href: "/report-bug" },
      { text: "Feedback", href: "/feedback" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "LinkedIn", href: "https://www.linkedin.com/company/nexml" },
      { text: "Contact", href: "/contact" },
      { text: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background w-full px-4">
      <div className="max-w-container mx-auto">
        <FooterMain>
          {/* here add tailwind class to make the firs footer column be space between with that div. And also add a space for the company address "New York City Sain Peter 59" */}
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">NEXML</h3>
              </div>
            </FooterColumn>
            {columns.map((column) => (
              <FooterColumn key={column.title}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("/") ? "_self" : "_blank"}
                    rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{COPYRIGHT}</div>
            <div className="flex items-center gap-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <ModeToggle />
            </div>
          </FooterBottom>
        </FooterMain>
      </div>
    </footer>
  );
}
