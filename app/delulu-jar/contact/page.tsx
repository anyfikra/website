export default function DeluluContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <img src="/static/icon-delulu-jar.png" alt="Delulu Jar" className="rounded-2xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">We're here to help you and your partner</p>
            <p className="text-lg text-pink-600 font-medium mt-2">"Love looks good on you"</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💕</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Support?</h2>
              <p className="text-gray-600 mb-6">
                Having trouble with your love jar? We're here to help you keep the romance flowing
                smoothly.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-pink-600">📧</span>
                  <span className="text-gray-700">support@anyfikra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pink-600">⏰</span>
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature Requests</h2>
              <p className="text-gray-600 mb-6">
                Have an idea to make DeluluJar even more romantic? We love hearing from couples!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-pink-600">📧</span>
                  <span className="text-gray-700">features@anyfikra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pink-600">💭</span>
                  <span className="text-gray-700">Share your love story ideas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I pair with my partner?
                </h3>
                <p className="text-gray-600">
                  After creating your account, you'll receive a unique pairing code. Share this code
                  with your partner, and they can enter it during their sign-up process to connect
                  your jars together.
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I add a note to the jar?
                </h3>
                <p className="text-gray-600">
                  Simply tap the "Add Note" button, write your sweet message, and hit "Drop in Jar".
                  Your partner will be able to discover it when they shake the jar for a random
                  note.
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I open the jar to read notes?
                </h3>
                <p className="text-gray-600">
                  Tap or shake your device to open the jar and retrieve a random love note from your
                  partner. Each opening is a delightful surprise!
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I add photos and videos to my notes?
                </h3>
                <p className="text-gray-600">
                  As of now, we only support text. We will add audio recordings, photos, and videos
                  in the future.
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I see all our notes in one place?
                </h3>
                <p className="text-gray-600">
                  Yes! Check the History section to view all your love notes chronologically. You
                  can filter to see notes you've sent or received from your partner.
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I react to my partner's notes?
                </h3>
                <p className="text-gray-600">
                  Absolutely! When you open a note, you can react with emoji to show your partner
                  how their message made you feel. It's a sweet way to acknowledge their love notes.
                </p>
              </div>

              <div className="border-l-4 border-pink-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is my data private and secure?
                </h3>
                <p className="text-gray-600">
                  Your data is private and secure. We never read your messages and they're stored
                  securely using Firebase's industry-standard security.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-pink-100 mb-6">
              Our team is dedicated to helping couples strengthen their relationships through
              DeluluJar. Don't hesitate to reach out with any questions, concerns, or just to share
              your love story with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@anyfikra.com?subject=DeluluJar Support"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold"
              >
                📧 Email Support
              </a>
              <a
                href="/delulu-jar/privacy"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold border border-pink-400"
              >
                🔒 Privacy Policy
              </a>
            </div>
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
