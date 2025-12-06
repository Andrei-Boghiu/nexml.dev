import { User, Users } from "lucide-react";
import { PricingColumn, PricingColumnProps } from "@/components/ui/pricing-column";
import { Section } from "@/components/ui/section";

const plans: PricingColumnProps[] = [
  {
    name: "Starter",
    description: "For recruiters validating NEXML’s scoring, ranking, and filtering capabilities",
    price: 0,
    priceNote: "Free forever. No credit card required.",
    cta: {
      variant: "glow",
      label: "Start Screening",
      href: "/app/signup",
    },
    features: [
      "50 resume evaluations / month",
      "1 active job profile",
      "AI-powered relevance scoring",
      "Transparent match breakdowns",
      "Export top candidates",
    ],
    variant: "default",
    className: "hidden lg:flex",
  },
  {
    name: "Pro",
    icon: <User className="size-4" />,
    description: "For individual recruiters and hiring managers dealing with high applicant volume",
    price: 49,
    priceNote: "Per month. No hidden fees.",
    cta: {
      variant: "default",
      label: "Upgrade to Pro",
      href: "/app/upgrade",
    },
    features: [
      "2,500 resume evaluations / month",
      "Unlimited job profiles",
      "Advanced scoring models",
      "Location & eligibility checks",
      "CSV / ATS exports",
      "Priority model updates",
    ],
    variant: "glow-brand",
  },
  {
    name: "Team",
    icon: <Users className="size-4" />,
    description: "For hiring teams, agencies, or companies needing scalable, multi-user evaluation",
    price: 199,
    priceNote: "Per month per team. Add unlimited collaborators.",
    cta: {
      variant: "default",
      label: "Contact Sales",
      href: "/contact",
    },
    features: [
      "25,000 resume evaluations / month",
      "Team dashboards & permissions",
      "Custom scoring rules",
      "Multi-org support",
      "Premium support",
      "API access",
    ],
    variant: "glow",
  },
];

export default function PricingPage() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Smarter Hiring Starts Here
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Transparent pricing designed for modern recruiting teams overwhelmed by irrelevant applications and
            AI-generated resumes.
          </p>
        </div>

        {plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <p className="text-sm text-muted-foreground max-w-[600px] font-normal sm:text-xl">
            Pay-as-you-go usage-based billing is in development.
          </p>
        </div>
      </div>
    </Section>
  );
}
