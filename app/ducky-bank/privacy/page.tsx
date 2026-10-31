import type { Metadata } from "next";
import DocPage, { type DocSection, DocSummary } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Ducky Bank Privacy Policy",
  description: "How Ducky Bank handles your financial data.",
};

const SUMMARY = [
  "All data is stored locally on your device",
  "No financial data is transmitted to external servers",
  "Your transaction history never leaves your device",
  "Complete offline functionality, works without internet",
];

const SECTIONS: DocSection[] = [
  {
    title: "What We Collect",
    content: (
      <>
        <h3>Financial data</h3>
        <ul>
          <li>Transaction records (income and expenses you manually enter)</li>
          <li>Category preferences and custom categories</li>
          <li>Budget goals and financial targets</li>
          <li>Achievement progress and milestones</li>
        </ul>
        <h3>App preferences</h3>
        <ul>
          <li>Language and theme preferences</li>
          <li>App settings and customizations</li>
        </ul>
        <h3>Technical information</h3>
        <ul>
          <li>Device information and app performance data</li>
          <li>Anonymized usage analytics to improve the app</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use It",
    content: (
      <ul>
        <li>Provide transaction tracking and expense management features</li>
        <li>Generate spending reports and financial insights</li>
        <li>Provide personalized duck insights and motivational messages</li>
        <li>
          Track achievement progress and celebrate your financial milestones
        </li>
        <li>Improve app performance and add new features</li>
      </ul>
    ),
  },
  {
    title: "Information Sharing",
    content: (
      <p>
        <strong>We do not share, sell, or transmit your financial data.</strong>{" "}
        Since Ducky Bank operates offline-first, your financial information
        stays on your device. We may collect anonymized usage analytics to
        improve the app, but never personal financial details.
      </p>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <ul>
        <li>Complete control over your data (stored on your device)</li>
        <li>Export your financial data at any time</li>
        <li>Delete all data by uninstalling the app</li>
        <li>Disable analytics collection in app settings</li>
      </ul>
    ),
  },
  {
    title: "Data Backup",
    content: (
      <p>
        Since data is stored locally, we recommend regular device backups to
        protect your financial records. Future updates may include optional
        cloud backup with end-to-end encryption, but currently all data
        remains on your device for maximum privacy.
      </p>
    ),
  },
  {
    title: "Questions",
    content: (
      <p>
        Email us at{" "}
        <a href="mailto:privacy@anyfikra.com">privacy@anyfikra.com</a> with the
        subject <em>Ducky Bank Privacy Inquiry</em>.
      </p>
    ),
  },
];

export default function DuckyBankPrivacyPage() {
  return (
    <DocPage
      kicker="Ducky Bank"
      title="Privacy Policy"
      intro="Ducky Bank is offline-first: your financial data stays on your device."
      updated="December 2025"
      lead={<DocSummary title="Offline-first and secure" items={SUMMARY} />}
      sections={SECTIONS}
    />
  );
}
