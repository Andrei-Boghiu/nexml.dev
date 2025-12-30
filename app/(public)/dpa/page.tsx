export default function DataProcessingAgreement() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Data Processing Agreement (DPA) – NEXML</h1>

      <p className="mb-6">
        This Data Processing Agreement (“Agreement”) forms part of the Terms of Use and governs the processing of
        personal data by NEXML in accordance with Regulation (EU) 2016/679 (GDPR).
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">1. Parties and roles</h2>
        <ul className="space-y-1">
          <li>
            <strong>Data Controller:</strong> The customer (company or legal entity) using the NEXML platform for
            recruitment purposes.
          </li>
          <li>
            <strong>Data Processor:</strong> NEXML.
          </li>
        </ul>
        <p className="mt-3">
          The Controller determines the purposes and means of processing candidate personal data. NEXML processes data
          solely on documented instructions from the Controller.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">2. Scope and purpose of processing</h2>
        <p className="mb-3">
          NEXML processes personal data exclusively for the purpose of assisting recruitment workflows, including:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Uploading and analyzing CVs</li>
          <li>AI-based scoring and prioritization of candidates</li>
          <li>Generating analytical insights for HR decision support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">3. Categories of data subjects and data</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Data subjects:</strong> job candidates
          </li>
          <li>
            <strong>Personal data:</strong> information contained in CVs (e.g. work experience, education, skills,
            contact details, as provided by the Controller)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">4. Processing characteristics</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Processing occurs temporarily and only for analysis purposes</li>
          <li>No reuse of candidate data for training or secondary purposes</li>
          <li>No sale, profiling, or marketing use of personal data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">5. Obligations of NEXML (Processor)</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Process personal data only on documented instructions from the Controller</li>
          <li>Ensure personnel are bound by confidentiality obligations</li>
          <li>Implement appropriate technical and organizational security measures</li>
          <li>Assist the Controller in responding to data subject requests where applicable</li>
          <li>Notify the Controller without undue delay in case of a personal data breach</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">6. Obligations of the Controller</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Ensure a lawful basis for processing candidate data</li>
          <li>Provide required privacy information to data subjects</li>
          <li>Ensure instructions provided to NEXML comply with GDPR</li>
          <li>Maintain records of processing activities</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">7. Sub-processors</h2>
        <p>
          NEXML does not engage sub-processors for processing candidate CV data, except for infrastructure services
          strictly necessary for hosting and security. Any such sub-processors are bound by equivalent data protection
          obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">8. Data retention and deletion</h2>
        <p>
          Personal data is retained only for the duration necessary to perform the requested analysis. Upon termination
          of the service or at the Controller’s request, data is deleted or rendered inaccessible, unless retention is
          required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">9. International transfers</h2>
        <p>
          NEXML does not intentionally transfer personal data outside the European Union. If such transfer becomes
          necessary, it will be conducted in accordance with GDPR Chapter V.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">10. Audits</h2>
        <p>
          Upon reasonable request, NEXML will provide information necessary to demonstrate compliance with this
          Agreement, subject to confidentiality and security considerations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">11. Liability</h2>
        <p>Each party is liable only for its own GDPR violations, in accordance with Article 82 GDPR.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">12. Governing law</h2>
        <p>This Agreement is governed by the laws of Romania and applicable European Union legislation.</p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">13. Contact</h2>
        <p>
          For data protection matters:{" "}
          <a href="mailto:contact@nexml.dev" className="underline">
            contact@nexml.dev
          </a>
        </p>
      </section>
    </div>
  );
}
