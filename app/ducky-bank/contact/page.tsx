import type { Metadata } from "next";
import DocPage, { type DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Ducky Bank Support",
  description: "Get help with Ducky Bank, request a feature, or read the FAQ.",
};

const FAQ = [
  {
    q: "How do I add a new transaction?",
    a: "Tap the “+” button, select income or expense, choose a category, enter the amount and description, then save.",
  },
  {
    q: "Can I create custom categories?",
    a: "Yes! Go to category management and create custom categories with your own names and icons.",
  },
  {
    q: "Does the app work offline?",
    a: "Absolutely! All data is stored locally on your device so you can track expenses anywhere, anytime.",
  },
  {
    q: "How do I view my spending reports?",
    a: "Navigate to the Reports tab to see visual breakdowns of your spending by day, week, and month.",
  },
  {
    q: "What are duck achievements?",
    a: "Complete challenges like “Track expenses for 7 days” to unlock achievements and motivational duck messages.",
  },
  {
    q: "Can I export my data?",
    a: "Contact our support team and we can help you export your transaction data.",
  },
  {
    q: "How do I switch languages?",
    a: "Go to Settings and select your preferred language from English, French, Spanish, Japanese, or Russian.",
  },
];

const SECTIONS: DocSection[] = [
  {
    title: "Technical Support",
    content: (
      <>
        <p>
          Having trouble tracking expenses? Email{" "}
          <a href="mailto:support@anyfikra.com">support@anyfikra.com</a>.
        </p>
        <ul>
          <li>Response within 24 hours</li>
          <li>Available in 5 languages</li>
        </ul>
      </>
    ),
  },
  {
    title: "Feature Requests",
    content: (
      <p>
        Ideas to make Ducky Bank even better? Send them to{" "}
        <a href="mailto:features@anyfikra.com">features@anyfikra.com</a>.
      </p>
    ),
  },
  {
    title: "Frequently Asked Questions",
    content: FAQ.map(({ q, a }) => (
      <div key={q}>
        <h3>{q}</h3>
        <p className="mt-1">{a}</p>
      </div>
    )),
  },
];

export default function DuckyBankContactPage() {
  return (
    <DocPage
      kicker="Ducky Bank"
      title="Contact & Help"
      intro="Your friendly financial duck squad is here to help."
      sections={SECTIONS}
    />
  );
}
