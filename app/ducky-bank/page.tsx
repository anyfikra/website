export default function DuckyBankPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg">
            <img src="/static/icon-ducky-bank.png" alt="Ducky Bank" className="rounded-2xl" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Ducky Bank</h1>
          <p className="text-2xl text-orange-600 font-medium mb-8">
            "Quack your way to financial freedom!"
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A simple yet powerful expense manager with a funny twist using a rubber duck as your
            financial guide. Track spending, manage budgets, and build better money habits.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Entry</h3>
              <p className="text-gray-600 text-sm">
                Fast transaction recording with smart categorization and form validation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Reports</h3>
              <p className="text-gray-600 text-sm">
                Daily, weekly, and monthly spending reports with beautiful visual breakdowns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h3>
              <p className="text-gray-600 text-sm">
                Gamified financial tracking with achievement system and motivational duck messages.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Language</h3>
              <p className="text-gray-600 text-sm">
                Available in English, French, Spanish, Japanese, and Russian with full localization.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Category Management</h4>
                    <p className="text-gray-600 text-sm">
                      Custom categories with smart defaults and visual icons
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dark Mode Support</h4>
                    <p className="text-gray-600 text-sm">
                      Beautiful dark theme with automatic switching
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Offline-First</h4>
                    <p className="text-gray-600 text-sm">
                      Works without internet using local storage
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duck Insights</h4>
                    <p className="text-gray-600 text-sm">
                      Motivational messages and financial tips from your duck guide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transaction History</h4>
                    <p className="text-gray-600 text-sm">
                      Detailed history with filtering and search capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Budget Tracking</h4>
                    <p className="text-gray-600 text-sm">
                      Monthly budgets with progress indicators (coming soon)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.duckybank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">🦆</span>
                Download for Android
              </a>
            </div>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Join the duck squad and take control of your finances with style!
            </p>

            <div className="flex justify-center gap-6 text-sm">
              <a
                href="/ducky-bank/privacy"
                className="text-orange-600 hover:text-orange-700 transition-colors underline decoration-orange-300 hover:decoration-orange-500"
              >
                🔒 Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/ducky-bank/contact"
                className="text-orange-600 hover:text-orange-700 transition-colors underline decoration-orange-300 hover:decoration-orange-500"
              >
                🦆 Contact & Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
