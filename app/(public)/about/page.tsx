import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const highlights = [
  {
    title: "AI-Driven Resume Scoring",
    description:
      "Automatically score and rank candidates based on relevance, skills, and experience alignment with job requirements.",
  },
  {
    title: "Semantic Matching",
    description: "Understand context and intent beyond keywords, ensuring more accurate job-to-candidate matching.",
  },
  {
    title: "OCR & Document Parsing",
    description: "Extract structured data from resumes across multiple file types, including scanned documents.",
  },
  {
    title: "Actionable Insights",
    description: "Generate automated summaries and hiring insights to support faster, data-driven decisions.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">What is NEXML?</h1>
        <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
          NEXML is an AI-powered recruitment platform built to streamline and optimize the candidate screening process.
          Using advanced NLP, semantic understanding, and machine learning, NEXML analyzes resumes and job descriptions
          in depth — helping companies identify the most qualified candidates in seconds.
        </p>
        <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
          Designed for modern HR teams, NEXML reduces repetitive work, increases accuracy, and ensures consistent hiring
          decisions across the organization.
        </p>
      </section>

      <Separator />

      {/* Mission Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Our Mission</h2>
        <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
          To empower companies with intelligent tools that make hiring faster, fairer, and more efficient.
        </p>
      </section>

      <Separator />

      {/* Highlights Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Key Highlights</h2>
          <p>Powerful capabilities designed to enhance every stage of candidate screening.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <Card key={item.title} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <p>Built to scale — from small businesses to large enterprises.</p>
        </div>
      </section>

      <Separator className="mt-24" />
    </div>
  );
}
