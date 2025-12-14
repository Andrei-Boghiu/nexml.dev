import { User, Users } from "lucide-react";
import { PricingColumn, PricingColumnProps } from "@/components/ui/pricing-column";
import { Section } from "@/components/ui/section";

const title = "Smarter Hiring Starts Here";
const description =
  "Transparent pricing designed for modern recruiting teams overwhelmed by irrelevant applications and AI-generated resumes.";

const plans: PricingColumnProps[] = [
  {
    name: "Free Trial",
    description: "A risk-free sandbox to experience Nexml’s AI-driven CV analysis before committing.",
    price: 0,
    priceNote: "No credit card required.",
    cta: {
      variant: "glow",
      label: "Start free trial",
      href: "/app/signup",
    },
    features: [
      "Cloud-based storage",
      "AI relevance scoring",
      "Explained AI decisions",
      "Custom qualification rules",
      "Up to 10 job profiles",
      "Up to 100 CV analyses per day",
      "Up to 100 CVs per job profile",
      "60-day data retention",
    ],
    variant: "default",
    className: "hidden lg:flex",
  },
  {
    name: "Pro",
    icon: <User className="size-4" />,
    description: "Designed for recruiters and hiring managers who need speed, depth, and scale.",
    price: 29,
    priceNote: "Billed monthly. Cancel anytime.",
    cta: {
      variant: "default",
      label: "Upgrade to Pro",
      href: "/app/upgrade",
    },
    features: [
      "Everything in Free",
      "Unlimited job profiles",
      "Unlimited CVs per job profile",
      "Up to 1,000 CV analyses per day",
      "120-day data retention",
      "Priority processing queue",
    ],
    variant: "glow-brand",
  },
  {
    name: "Custom",
    icon: <Users className="size-4" />,
    description: "Built for teams, agencies, and enterprises with bespoke workflows and compliance needs.",
    price: 199,
    priceNote: "Starting price for tailored options.",
    // as you need
    cta: {
      variant: "default",
      label: "Contact Sales",
      href: "/contact",
    },
    features: [
      "Multi-tenant support",
      "On-prem deployment options",
      "Custom retention policies",
      "Custom limits",
      "Custom AI models",
    ],
    variant: "glow",
  },
];

export default function PricingPage() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">{title}</h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">{description}</p>
        </div>

        <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingColumn key={plan.name} {...plan} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <p className="text-sm text-muted-foreground max-w-[600px] font-normal sm:text-xl">
            Pay-as-you-go usage-based billing is in development.
          </p>
        </div>
      </div>
    </Section>
  );
}
