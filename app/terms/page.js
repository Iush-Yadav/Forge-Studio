import Link from "next/link";
import { EMAIL, SITE_NAME } from "@/lib/constants";
import { LegalShell, P, H } from "./legal-ui";

export const metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the forge.studio website and services.",
};

export default function Terms() {
  return (
    <LegalShell title="Terms of Service" updated="Last updated: July 2026">
      <P>
        These terms govern your use of the {SITE_NAME} website and any services you engage us
        to provide. By using this site or working with us, you agree to them.
      </P>

      <H>1. Our services</H>
      <P>
        We design, build and maintain websites and related digital services. The specific scope,
        deliverables, timeline and price for your project are agreed in a separate written quote
        or proposal, which takes precedence over general statements on this site.
      </P>

      <H>2. Quotes &amp; pricing</H>
      <P>
        Prices shown on this site are indicative starting points. Your final price depends on your
        requirements and is confirmed in your proposal. Timelines assume timely feedback and content from you.
      </P>

      <H>3. Payments</H>
      <P>
        Payment terms (deposits, milestones and final balance) are set out in your proposal.
        Hosting, domain and maintenance included in a plan apply for the stated period only.
      </P>

      <H>4. Revisions &amp; guarantee</H>
      <P>
        The number of revision rounds included is stated in your plan. Any 30-day satisfaction
        guarantee applies as described in your proposal and covers the agreed scope of work.
      </P>

      <H>5. Intellectual property</H>
      <P>
        On full payment, ownership of the final website deliverables transfers to you. We may
        display non-confidential work in our portfolio unless you ask us in writing not to.
      </P>

      <H>6. Liability</H>
      <P>
        We deliver our services with reasonable care and skill, but we do not guarantee specific
        business outcomes such as revenue, rankings or traffic. Our liability is limited to the
        fees paid for the affected work.
      </P>

      <H>7. Contact</H>
      <P>Questions about these terms? Email us at {EMAIL}.</P>

      <P style={{ marginTop: 48 }}>
        <Link href="/" style={{ color: "#c8ff00" }}>← Back to home</Link>
      </P>
    </LegalShell>
  );
}
