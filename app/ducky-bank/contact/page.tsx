export default function DuckyBankContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <img src="/static/icon-ducky-bank.png" alt="Ducky Bank" className="rounded-2xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Your friendly financial duck squad is here to help!
            </p>
            <p className="text-lg text-orange-600 font-medium mt-2">
              "Quack your way to financial freedom!"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🦆</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Support</h2>
              <p className="text-gray-600 mb-6">
                Having trouble tracking your expenses or need help with the app? Our duck squad is
                ready to assist!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">📧</span>
                  <span className="text-gray-700">support@anyfikra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">⏰</span>
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">🌍</span>
                  <span className="text-gray-700">Available in 5 languages</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature Requests</h2>
              <p className="text-gray-600 mb-6">
                Got ideas to make Ducky Bank even better? We love hearing from our financial
                wellness community!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">📧</span>
                  <span className="text-gray-700">features@anyfikra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">🚀</span>
                  <span className="text-gray-700">Help us build the future of finance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I add a new transaction?
                </h3>
                <p className="text-gray-600">
                  Simply tap the "+" button on your home screen, select whether it's income or
                  expense, choose a category, enter the amount and description, and save. It's that
                  easy!
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I create custom categories?
                </h3>
                <p className="text-gray-600">
                  Yes! Go to the category management screen and create custom categories with your
                  own names and icons. Perfect for tracking specific spending areas that matter to
                  you.
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Does the app work offline?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Ducky Bank is designed to work completely offline. All your data is
                  stored locally on your device, so you can track expenses anywhere, anytime.
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I view my spending reports?
                </h3>
                <p className="text-gray-600">
                  Navigate to the Reports tab to see beautiful visual breakdowns of your spending by
                  day, week, and month. Track your progress and identify spending patterns easily.
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are duck achievements?
                </h3>
                <p className="text-gray-600">
                  Our gamification system rewards you for building good financial habits! Complete
                  challenges like "Track expenses for 7 days" to unlock achievements and
                  motivational duck messages.
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I export my data?</h3>
                <p className="text-gray-600">
                  Yes! Contact our support team and we can help you export your transaction data.
                  Your financial records should always be accessible to you.
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I switch languages?
                </h3>
                <p className="text-gray-600">
                  Go to Settings and select your preferred language from English, French, Spanish,
                  Japanese, or Russian. The entire app will adapt to your chosen language.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help? 🦆</h2>
            <p className="text-orange-100 mb-6">
              Our rubber duck development team is passionate about helping you achieve financial
              wellness. Whether you need technical support, have feature ideas, or just want to
              share your success story, we'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@anyfikra.com?subject=Ducky Bank Support"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
              >
                📧 Email Support
              </a>
              <a
                href="/ducky-bank/privacy"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold border border-orange-400"
              >
                🔒 Privacy Policy
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Duck Tips for Better Support 🦆
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <p className="text-gray-600">
                  Include your device model and app version when reporting issues
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📸</div>
                <p className="text-gray-600">
                  Screenshots help us understand and resolve problems faster
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-gray-600">
                  Be specific about what you were trying to do when the issue occurred
                </p>
              </div>
            </div>
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
