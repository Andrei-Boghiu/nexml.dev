export default function CookiePolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Cookie Policy – NEXML</h1>

      <p className="mb-6">
        This policy explains the use of cookies on the NEXML website in accordance with European Union and Romanian
        legislation.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">1. Legal framework</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Regulation (EU) 2016/679 – GDPR (Art. 6, 7)</li>
          <li>Law no. 506/2004, Art. 4 para. (5)</li>
          <li>Law no. 190/2018</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">2. What are cookies</h2>
        <p>Cookies are small text files stored on the user’s device.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">3. Cookies used by NEXML</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Strictly necessary cookies – required for website functionality</li>
          <li>Anonymous statistical cookies – used to measure traffic</li>
        </ul>
        <p className="mt-2 font-medium">No marketing or profiling cookies are used.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">4. Consent</h2>
        <p>
          Non-essential cookies are installed only after the user’s explicit consent, in accordance with Art. 4 para.
          (5) of Law 506/2004 and Art. 7 GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">5. Data collected through cookies</h2>
        <p>No personal data is collected (IP address, email, user ID).</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">6. User rights</h2>
        <p>Users may withdraw their consent at any time and manage their preferences through their browser settings.</p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">7. Contact</h2>
        <p>
          For GDPR-related questions:{" "}
          <a href="mailto:contact@nexml.dev" className="underline">
            contact@nexml.dev
          </a>
        </p>
        <p className="mt-1">DPO: Vătuí Nicolae</p>
      </section>
    </div>
  );
}
