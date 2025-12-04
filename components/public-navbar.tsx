import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from "./ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/logo";

interface NavbarLink {
  text: string;
  href: string;
}

const links: NavbarLink[] = [
  { text: "About", href: "/about" },
  { text: "Features", href: "/features" },
  { text: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Logo />
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {links.map(({ text, href }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink asChild>
                      <Link href={href} className={navigationMenuTriggerStyle()}>
                        <span>{text}</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </NavbarLeft>
          <NavbarRight>
            <Link href="/login" className="hidden text-sm md:block">
              Sign in
            </Link>

            <Button variant="default" asChild>
              <Link href="/payment">Get Started</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Logo />
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
