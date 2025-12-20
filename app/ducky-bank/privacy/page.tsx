export default function DuckyBankPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <img src="/static/icon-ducky-bank.png" alt="Ducky Bank" className="rounded-2xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Ducky Bank - Your Financial Privacy Matters</p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to Your Financial Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Ducky Bank, we understand that your financial information is sensitive and
                personal. We are committed to protecting your privacy and keeping your financial
                data secure while helping you achieve your money management goals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Financial Data</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Transaction records (income and expenses you manually enter)</li>
                    <li>Category preferences and custom categories</li>
                    <li>Budget goals and financial targets</li>
                    <li>Achievement progress and milestones</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">App Preferences</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Language and theme preferences</li>
                    <li>App settings and customizations</li>
                    <li>Duck message preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Device information and app performance data</li>
                    <li>Usage analytics to improve app functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide transaction tracking and expense management features</li>
                <li>Generate spending reports and financial insights</li>
                <li>Sync your data across devices (locally stored)</li>
                <li>Provide personalized duck insights and motivational messages</li>
                <li>Track achievement progress and celebrate your financial milestones</li>
                <li>Improve app performance and add new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage & Security</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  🦆 Offline-First & Secure
                </h3>
                <ul className="list-disc list-inside text-orange-700 space-y-2">
                  <li>All data is stored locally on your device</li>
                  <li>No financial data is transmitted to external servers</li>
                  <li>Your transaction history never leaves your device</li>
                  <li>Complete offline functionality - works without internet</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>
                  We do not share, sell, or transmit your financial data to any third parties.
                </strong>
                Since Ducky Bank operates offline-first, your financial information stays on your
                device. We may only collect anonymized usage analytics to improve the app
                experience, but never personal financial details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complete control over your data (it's stored on your device)</li>
                <li>Export your financial data at any time</li>
                <li>Delete all data by uninstalling the app</li>
                <li>Disable analytics collection in app settings</li>
                <li>Access to all data stored locally on your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Language Support</h2>
              <p className="text-gray-600 leading-relaxed">
                Ducky Bank supports multiple languages (English, French, Spanish, Japanese,
                Russian). Language preferences are stored locally and do not involve data
                transmission to external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Backup & Recovery</h2>
              <p className="text-gray-600 leading-relaxed">
                Since data is stored locally, we recommend regular device backups to protect your
                financial records. Future updates may include optional cloud backup features with
                end-to-end encryption, but currently all data remains on your device for maximum
                privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Improvements</h2>
              <p className="text-gray-600 leading-relaxed">
                We may collect anonymized usage statistics to understand how the app is used and
                improve features. This includes things like which screens are visited most often and
                app performance metrics, but never includes your actual transaction data or amounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or your data, please contact us
                at:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@anyfikra.com
                  <br />
                  <strong>Subject:</strong> Ducky Bank Privacy Inquiry
                </p>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <a
              href="/ducky-bank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              ← Back to Ducky Bank
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
