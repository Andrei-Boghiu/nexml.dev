export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">GDPR Privacy Policy – NEXML</h1>

      <p className="mb-6">
        This Privacy Policy describes how NEXML complies with Regulation (EU) 2016/679 (GDPR) and Law no. 190/2018
        regarding the protection of personal data.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">1. Data controller</h2>
        <ul className="space-y-1">
          <li>
            <span className="font-medium">Controller:</span> NEXML
          </li>
          <li>
            <span className="font-medium">Website:</span>{" "}
            <a href="https://www.nexml.dev" className="underline">
              https://www.nexml.dev
            </a>
          </li>
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:contact@nexml.dev" className="underline">
              contact@nexml.dev
            </a>
          </li>
          <li>
            <span className="font-medium">DPO:</span> Vătuí Nicolae
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">2. Scope of application</h2>
        <p>This policy applies to both the NEXML web version and the desktop version (.exe).</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">3. Desktop version (.exe) – data processing</h2>
        <p className="mb-3">The NEXML application runs locally on the user’s computer, including in offline mode.</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Does not transmit data to external servers</li>
          <li>Does not use third-party APIs</li>
          <li>All files and data remain exclusively on the user’s device</li>
          <li>The controller has NO access to user data</li>
        </ul>
        <p className="mt-3">
          According to Art. 2 para. (2) GDPR, data processed locally remains under the exclusive control of the user.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">4. Web version – collected data</h2>
        <p className="mb-3">The web version collects exclusively anonymous statistical data, without personal data:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>number of visits</li>
          <li>number of uploaded and analyzed files</li>
        </ul>
        <p className="mt-3 font-medium">Not collected: IP address, email, name, accounts, unique identifiers.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">5. Legal basis</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Art. 6 para. (1) lit. f) GDPR – legitimate interest (platform security and operation)</li>
          <li>Art. 6 para. (1) lit. a) GDPR – consent (non-essential cookies)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">6. AI / Machine Learning data</h2>
        <p>
          NEXML uses AI algorithms that process files strictly locally (desktop version) or temporarily (web version),
          without storing or reusing user data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">7. Rights of data subjects</h2>
        <p>
          In accordance with Art. 15–22 GDPR: right of access, rectification, erasure, restriction of processing, data
          portability, and objection.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">8. Data security</h2>
        <p>Art. 32 GDPR – appropriate technical and organizational measures are implemented to protect data.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">9. International data transfers</h2>
        <p>NEXML does not transfer data outside the European Union.</p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">10. Supervisory authority</h2>
        <p>ANSPDCP – National Supervisory Authority for Personal Data Processing.</p>
      </section>
    </div>
  );
}
