export default function DeluluPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg">
            <img src="/static/icon-delulu-jar.png" alt="Delulu Jar" className="rounded-2xl" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">DeluluJar</h1>
          <p className="text-2xl text-pink-600 font-medium mb-8">"Love looks good on you"</p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A wholesome, private mobile app for couples to store and share little compliments, sweet
            thoughts, and fun "delulu" moments. Works like a jar of handwritten love notes, but
            digital.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Love Notes</h3>
              <p className="text-gray-600">
                Drop sweet messages, compliments, or fun thoughts into your shared jar. Support
                text, audio, images, and videos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Random Surprises</h3>
              <p className="text-gray-600">
                Shake or tap to retrieve a random note from your shared jar. Each opening is a
                delightful surprise from your partner.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Private & Secure</h3>
              <p className="text-gray-600">
                Your love notes are completely private between you and your partner. Securely stored
                with end-to-end privacy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pair Up</h4>
                <p className="text-sm text-gray-600">
                  Connect with your partner through our secure pairing system
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Add Notes</h4>
                <p className="text-sm text-gray-600">
                  Drop sweet messages, photos, or voice notes into your jar
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏺</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Open Jar</h4>
                <p className="text-sm text-gray-600">
                  Shake to get a random note and surprise yourself
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💕</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Share Love</h4>
                <p className="text-sm text-gray-600">
                  React with emojis and build your love story together
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/us/app/delulujar/id6751821045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">📱</span>
                <p>Download for iOS</p>
              </a>
            </div>

            <div className="flex justify-center gap-6 text-sm">
              <a
                href="/delulu-jar/privacy"
                className="text-pink-600 hover:text-pink-700 transition-colors underline decoration-pink-300 hover:decoration-pink-500"
              >
                🔒 Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/delulu-jar/contact"
                className="text-pink-600 hover:text-pink-700 transition-colors underline decoration-pink-300 hover:decoration-pink-500"
              >
                💕 Contact & Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
