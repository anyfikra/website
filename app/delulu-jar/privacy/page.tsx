export default function DeluluPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <img src="/static/icon-delulu-jar.png" alt="Delulu Jar" className="rounded-2xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">DeluluJar - Protecting Your Love Notes</p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                At DeluluJar, we understand that your love notes and personal moments are deeply
                private. We are committed to protecting your privacy and ensuring that your intimate
                conversations with your partner remain completely secure and confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Email address (for account creation and authentication)</li>
                    <li>
                      Basic profile information (nickname, relationship details from onboarding)
                    </li>
                    <li>Love notes content (text, audio, images, videos you share)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Device information and app usage analytics</li>
                    <li>Timestamps for synchronization between partners</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and maintain the DeluluJar service</li>
                <li>Synchronize love notes between you and your partner</li>
                <li>Authenticate your account and ensure security</li>
                <li>Improve our app functionality and user experience</li>
                <li>Send important service-related notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security & Privacy</h2>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-800 mb-3">
                  🔒 Your Love Notes Are Private
                </h3>
                <ul className="list-disc list-inside text-pink-700 space-y-2">
                  <li>All notes are encrypted and stored securely in Firebase</li>
                  <li>Only you and your paired partner can access your shared jar</li>
                  <li>We never read, analyze, or share your personal content</li>
                  <li>Data is transmitted using industry-standard encryption</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>
                  We do not sell, trade, or share your personal information with third parties.
                </strong>
                Your love notes remain private between you and your partner. We may only disclose
                information when:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Required by law or legal process</li>
                <li>To protect the safety and security of our users</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and all associated data</li>
                <li>Export your love notes (data portability)</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your love notes and account information as long as your account is active.
                If you delete your account, we will permanently delete all your data within 30 days,
                except where required by law to retain certain information.
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
                  <strong>Subject:</strong> DeluluJar Privacy Inquiry
                </p>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <a
              href="/delulu-jar"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              ← Back to DeluluJar
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
