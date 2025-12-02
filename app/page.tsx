export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight">NEXML::Work in Progress</h1>
          <p className="text-base text-foreground/70 leading-relaxed">
            NEXML is an AI-powered platform that helps companies score and rank CVs against job descriptions. Our goal
            is to make recruitment faster, fairer, and more data-driven.
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 px-6 bg-foreground/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">AI CV Scoring</h3>
            <p className="text-sm text-foreground/70">
              Automatically evaluate resumes and assign relevance scores to match job requirements.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Job Description Analysis</h3>
            <p className="text-sm text-foreground/70">
              Compare CVs against job descriptions and highlight top candidates efficiently.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Recruiter Dashboard</h3>
            <p className="text-sm text-foreground/70">
              Gain insights on applicant ranking, match quality, and candidate pool at a glance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-semibold tracking-tight">Designed for Modern Recruitment Teams</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            NEXML is built for companies that want to hire faster, make fairer decisions, and leverage AI insights
            without extra complexity.
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 px-6 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-semibold tracking-tight">Contact the Founder</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Have questions or want early access? Connect with the founder on LinkedIn.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="https://www.linkedin.com/in/alexandru-eugen-c"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
