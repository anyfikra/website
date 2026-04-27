import { Smartphone } from "lucide-react";

export default function StorageSqueezePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mb-8 mx-auto">
            <Smartphone className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Storage Squeeze</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Optimize your device storage with smart compression technology. Free up space without
            losing quality or important files.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Compression</h3>
              <p className="text-gray-600">
                Advanced algorithms that compress your photos and videos while maintaining quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe & Secure</h3>
              <p className="text-gray-600">
                Your files are processed locally on your device. No cloud uploads, complete privacy.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 text-gray-600 px-8 py-3 rounded-lg inline-block">
              Coming Soon...
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
