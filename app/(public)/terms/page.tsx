export default function TermsOfUse() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Terms of Use – NEXML</h1>

      <p className="mb-6">
        These Terms of Use govern access to and use of the NEXML platform, desktop application, and related services. By
        accessing or using NEXML, you agree to be bound by these terms.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">1. Service description</h2>
        <p className="mb-3">
          NEXML is an AI-powered automation platform designed primarily for HR and recruitment departments, providing CV
          analysis, scoring, and prioritization to support hiring workflows.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Web (cloud) version:</strong> pay-as-you-go pricing model, similar to usage-based cloud services,
            with a limited free trial.
          </li>
          <li>
            <strong>Desktop (on-premise) version:</strong> standalone executable (.exe) requiring a one-time license
            fee.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">2. Eligible users</h2>
        <p>
          NEXML is intended for use by companies and legal entities, in particular HR and recruitment departments.
          Individual users acting on behalf of a company must have the authority to bind that company to these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">3. Accounts and access</h2>
        <p className="mb-3">Access to the web version requires a user account.</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Authentication via email and password and/or OAuth</li>
          <li>Users are responsible for maintaining account confidentiality</li>
          <li>All activity performed through an account is the user’s responsibility</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">4. User-provided data and content</h2>
        <p className="mb-3">Users may upload CVs and related documents of job candidates for recruitment purposes.</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Users confirm they have a lawful basis to process candidate data</li>
          <li>Uploaded files are analyzed by AI using default criteria and user-defined instructions</li>
          <li>Users remain fully responsible for the content and legality of uploaded data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">5. Intellectual property</h2>
        <p className="mb-3">
          NEXML, including its AI engine, software, and documentation, is proprietary and protected by intellectual
          property laws.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Web version users receive no ownership rights, only the right to use the service</li>
          <li>On-premise users receive a limited, non-transferable license to use the software</li>
          <li>Reverse engineering, decompilation, or disassembly is strictly prohibited</li>
          <li>Redistribution or resale is not permitted</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">6. Disclaimer and limitation of liability</h2>
        <p className="mb-3">
          The software is provided <strong>“as is”</strong> and <strong>“as available.”</strong>
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Data loss may occur; users are responsible for maintaining backups</li>
          <li>NEXML is under active development and service interruptions may occur</li>
          <li>AI-generated results are advisory only and must not be considered final hiring decisions</li>
          <li>NEXML is not liable for hiring outcomes, employment decisions, or business losses</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">7. Suspension and termination</h2>
        <p>
          NEXML reserves the right to suspend or terminate access at any time if a user engages in illegal, unethical,
          abusive, or policy-violating behavior.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">8. Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by the laws of Romania and applicable European Union regulations. Any disputes shall
          be subject to the competent courts of Romania, unless mandatory EU consumer protection rules provide
          otherwise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">9. Changes to the terms</h2>
        <p>
          NEXML may update these Terms from time to time. Continued use of the service after changes constitutes
          acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">10. Contact</h2>
        <p>
          For legal or contractual questions:{" "}
          <a href="mailto:contact@nexml.dev" className="underline">
            contact@nexml.dev
          </a>
        </p>
      </section>
    </div>
  );
}
