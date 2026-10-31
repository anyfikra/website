import type { Metadata } from "next";
import DocPage, { type DocSection, DocSummary } from "@/components/DocPage";

const DESCRIPTION =
  "How AnyFikra collects, uses and protects your information across our website, apps and online channels.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
};

const LAST_UPDATED = "October 28, 2026";
const PRIVACY_EMAIL = "privacy@anyfikra.com";

const EmailLink = () => (
  <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
);

const SUMMARY = [
  "We collect only what we need to run and improve our products",
  "We never sell your personal information",
  "You can ask us to see or delete your data at any time",
  "Each app may have its own policy with app-specific details",
];

const SECTIONS: DocSection[] = [
  {
    title: "Who We Are",
    content: (
      <p>
        AnyFikra is an independent app studio run by one person, building
        small, thoughtful apps and sharing that work online. In this policy,
        &ldquo;AnyFikra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
        &ldquo;our&rdquo; refer to AnyFikra, and &ldquo;you&rdquo; refers to
        anyone who uses our products or interacts with us.
      </p>
    ),
  },
  {
    title: "What This Policy Covers",
    content: (
      <>
        <p>This policy applies to:</p>
        <ul>
          <li>This website, anyfikra.com, and its subdomains</li>
          <li>The mobile apps we publish</li>
          <li>Our official pages and accounts on online platforms</li>
          <li>Any emails, messages or feedback you send us</li>
        </ul>
        <p>
          Some of our apps have their own privacy policy describing the data
          that app handles. Where an app&rsquo;s policy is more specific than
          this one, the app&rsquo;s policy applies to that app.
        </p>
      </>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <p>
          When you contact us, send feedback, report a problem or message us,
          we receive what you choose to share, such as your name, email
          address, the content of your message and any attachments.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          When you use our website or apps, we and our service providers may
          collect:
        </p>
        <ul>
          <li>Device type, operating system, browser and language</li>
          <li>IP address and approximate location derived from it</li>
          <li>Pages or screens viewed and how you got there</li>
          <li>Crash reports and performance diagnostics</li>
          <li>
            Advertising identifiers, where ads are shown (you can reset or
            limit these in your device settings)
          </li>
          <li>
            Cookies and similar technologies (see Cookies, Analytics &amp;
            Ads below)
          </li>
        </ul>
        <h3>Information from online platforms</h3>
        <p>
          When you follow, comment on, message or otherwise interact with our
          pages and accounts on other platforms, we may see your public
          profile information and the content of your interaction. Those
          platforms may also give us aggregated statistics about how people
          engage with our content. Each platform&rsquo;s own privacy policy
          governs the data it collects about you.
        </p>
        <h3>Purchases</h3>
        <p>
          In-app purchases and subscriptions are processed by the store you
          downloaded the app from. We never receive your full payment
          details, only the confirmation needed to unlock what you bought.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <>
        <ul>
          <li>Provide, maintain and improve our apps and website</li>
          <li>Respond to your messages and support requests</li>
          <li>Diagnose crashes, fix bugs and keep our products secure</li>
          <li>Understand, in aggregate, how our products are used</li>
          <li>Show ads that help keep some of our products free</li>
          <li>Send updates you have asked for (you can opt out any time)</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>
        <p>
          Where the law requires a legal basis, we rely on your consent, on
          what is needed to provide a product you asked for, on our legitimate
          interest in running and improving our products, or on a legal
          obligation.
        </p>
      </>
    ),
  },
  {
    title: "Cookies, Analytics & Ads",
    content: (
      <>
        <p>
          We use Google Analytics to understand how visitors use this website,
          such as which pages are viewed, which links are clicked and where
          visits come from. It uses cookies to collect information like your
          device, browser, approximate location and the pages you visit. Learn{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            how Google uses this information
          </a>
          .
        </p>
        <p>
          This website and some of our apps show ads to help keep them free.
          Third-party vendors, including Google, use cookies to serve ads based
          on your prior visits to this website or other websites. Google&rsquo;s
          use of advertising cookies enables it and its partners to serve ads
          to you based on your visits to this site and/or other sites on the
          Internet.
        </p>
        <ul>
          <li>
            Opt out of Google Analytics with the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Google Analytics Opt-out Add-on
            </a>
          </li>
          <li>
            Opt out of personalized advertising in{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Google Ads Settings
            </a>
          </li>
          <li>
            Opt out of other vendors&rsquo; use of cookies at{" "}
            <a
              href="https://www.aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              aboutads.info
            </a>
          </li>
          <li>
            Reset your advertising ID or limit ad tracking in your device
            settings
          </li>
          <li>
            Block or delete cookies in your browser settings (some features may
            not work as expected)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Share Information",
    content: (
      <>
        <p>
          <strong>
            We don&rsquo;t sell your personal information.
          </strong>{" "}
          We share it only in these cases:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that
            help us run our products, such as hosting, analytics, crash
            reporting, email and advertising, acting on our behalf
          </li>
          <li>
            <strong>Platforms</strong> you use to
            download our apps or interact with us, as needed for those features
            to work
          </li>
          <li>
            <strong>Legal reasons</strong>, when
            required by law or needed to protect rights, safety or prevent fraud
          </li>
          <li>
            <strong>Business transfers</strong>, if
            AnyFikra or one of its apps is sold or transferred, under the
            protections of this policy
          </li>
          <li>
            <strong>With your consent</strong>, in any
            other case
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We keep personal information only as long as we need it for the
        purposes described here, for example as long as it takes to resolve
        your support request, plus a reasonable period afterwards. Aggregated
        data that no longer identifies you may be kept longer. Data an app
        stores only on your device stays there until you delete it or uninstall
        the app.
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        We use reasonable technical and organizational measures to protect your
        information. No method of transmission or storage is completely secure,
        so we can&rsquo;t guarantee absolute security, but we take it seriously
        and work with providers who do the same.
      </p>
    ),
  },
  {
    title: "International Transfers",
    content: (
      <p>
        Our service providers may process information in countries other than
        the one you live in. When we transfer personal information
        internationally, we rely on the safeguards required by applicable data
        protection laws.
      </p>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct information that is inaccurate</li>
          <li>Have your information deleted</li>
          <li>Object to or restrict certain processing</li>
          <li>Receive a copy of your information in a portable format</li>
          <li>Withdraw consent at any time, where we rely on it</li>
          <li>Opt out of personalized advertising</li>
          <li>Complain to your local data protection authority</li>
        </ul>
        <p>
          To exercise any of these rights, email <EmailLink />. We may ask you
          to verify your identity first, and we will never treat you
          differently for exercising your rights.
        </p>
      </>
    ),
  },
  {
    title: "Deleting Your Data",
    content: (
      <>
        <p>
          To have the personal information we hold about you deleted, email{" "}
          <EmailLink /> with the subject <em>Data Deletion Request</em>. Please
          include the email address or account you used with us and which app
          or service your request is about.
        </p>
        <ul>
          <li>We will confirm we received your request</li>
          <li>
            We will delete your data within 30 days, except anything we are
            legally required to keep
          </li>
          <li>
            Data stored only on your device can be removed by deleting it in the
            app or uninstalling the app
          </li>
          <li>
            If you connected another account to one of our apps, you can also
            remove our access from that service&rsquo;s settings
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Our products are not directed to children under 13, or the minimum age
        required in your country, and we don&rsquo;t knowingly collect personal
        information from them. If you believe a child has given us personal
        information, contact us and we will delete it.
      </p>
    ),
  },
  {
    title: "Third-Party Links",
    content: (
      <p>
        Our website and apps may link to websites and services we don&rsquo;t
        operate. We aren&rsquo;t responsible for their privacy practices, so we
        encourage you to read their policies.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we will change
        the &ldquo;Last updated&rdquo; date at the top of this page, and for
        significant changes we will give notice on this website or in our apps.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Questions about this policy or your data? Email <EmailLink /> and
        we&rsquo;ll get back to you.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <DocPage
      kicker="Legal"
      title="Privacy Policy"
      intro={DESCRIPTION}
      updated={LAST_UPDATED}
      lead={<DocSummary title="The short version" items={SUMMARY} />}
      sections={SECTIONS}
    />
  );
}
