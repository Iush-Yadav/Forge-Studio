import Link from "next/link";
import { EMAIL, PHONE_DISP, SITE_NAME } from "@/lib/constants";
import { LegalShell, P, H } from "../terms/legal-ui";

export const metadata = {
  title: "Privacy Policy",
  description: "How forge.studio collects, uses and protects your personal data.",
};

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="Last updated: July 2026">
      <P>
        {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what personal
        data we collect through this website, why we collect it, and your rights. We
        comply with India&apos;s Digital Personal Data Protection Act, 2023 and, where applicable, the EU GDPR.
      </P>

      <H>1. What we collect</H>
      <P>
        When you submit the contact or review form we collect the details you choose to
        provide — typically your name, business name, email, phone/WhatsApp number, budget
        range and your message or review. We do not collect payment information through this site.
      </P>

      <H>2. Why we use it</H>
      <P>
        We use your information solely to respond to your enquiry, provide a quote, deliver
        our services, and (for reviews) to display your feedback with your consent. We do not
        sell your data or share it with third parties for marketing.
      </P>

      <H>3. Service providers</H>
      <P>
        Form submissions are delivered to our inbox via Web3Forms, an email-delivery service.
        If analytics are enabled, we use a privacy-friendly, cookie-free analytics provider
        (Plausible) that does not track you across sites or collect personal data.
      </P>

      <H>4. Data retention</H>
      <P>
        We keep enquiry data only as long as needed to serve you and for our legitimate
        business records, after which it is deleted. You may ask us to delete your data at any time.
      </P>

      <H>5. Your rights</H>
      <P>
        You have the right to access, correct, or request deletion of your personal data, and
        to withdraw consent. To exercise any of these rights, email us at {EMAIL} or call {PHONE_DISP}.
      </P>

      <H>6. Contact</H>
      <P>
        Questions about this policy? Reach us at {EMAIL} or {PHONE_DISP}.
      </P>

      <P style={{ marginTop: 48 }}>
        <Link href="/" style={{ color: "#c8ff00" }}>← Back to home</Link>
      </P>
    </LegalShell>
  );
}
