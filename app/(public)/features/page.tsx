import { Separator } from "@/components/ui/separator";
import { Brain, Sparkles, BarChart3, FileSearch, FileText, Layers, Upload, LayoutDashboard } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "AI Resume Scoring",
    description:
      "Automatically evaluates each resume and assigns an accuracy-based score that reflects how well the candidate matches your job description.",
    icon: Brain,
  },
  {
    title: "Smart Candidate Ranking",
    description: "Instantly orders candidates from best to least suited, helping recruiters focus on top talent first.",
    icon: Sparkles,
  },
  {
    title: "Semantic Matching Engine",
    description:
      "Understands meaning, context, synonyms, transferable skills, and job-specific terminology — far beyond simple keyword matching.",
    icon: Layers,
  },
  {
    title: "Automated Candidate Insights",
    description: "Generates clear summaries showing strengths, missing skills, and fit scores for each applicant.",
    icon: BarChart3,
  },
  {
    title: "Document Parsing & OCR",
    description:
      "Processes PDFs, DOCX files, images, scanned documents, and more — extracting clean text even from low-quality files.",
    icon: FileSearch,
  },
  {
    title: "Job Description Optimization",
    description:
      "Analyzes your job postings and suggests improvements to increase clarity and attract better candidates.",
    icon: FileText,
  },
  {
    title: "Multi-Format Support",
    description: "Upload resumes in PDF, Word, image formats, email attachments, or bulk uploads.",
    icon: Upload,
  },
  {
    title: "Recruitment Dashboard & Analytics",
    description:
      "Provides insights into candidate pools, match quality, and hiring performance with easy-to-understand visual reports.",
    icon: LayoutDashboard,
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-6xl">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-6 mb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Powerful Features for Modern Recruitment</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Built to eliminate manual screening and replace it with intelligent, explainable AI-driven decisions.
        </p>
      </section>

      {/* Feature Stack */}
      <div className="space-y-32">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isReversed = index % 2 !== 0;

          return (
            <section
              key={feature.title}
              className={`grid md:grid-cols-2 gap-16 items-center ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{feature.title}</h2>

                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>

              <div className="flex items-center justify-center h-64 md:h-80 rounded-3xl border bg-muted/40">
                <Icon className="w-24 h-24 md:w-32 md:h-32" />
              </div>
            </section>
          );
        })}
      </div>

      <Separator className="mt-32" />
    </div>
  );
}
