import { Smartphone } from "lucide-react";

export default function StorageSqueezePage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-sky-100/50 rounded-full blur-[80px]" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors mb-16"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-base" style={{ fontFamily: "'Syne', sans-serif" }}>Back to AnyFikra</span>
        </a>

        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm">
            <Smartphone className="w-9 h-9 text-emerald-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">Storage Squeeze</h1>
          <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Optimize your device storage with smart compression technology. Free up space without
            losing quality or important files.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <div className="bg-white/80 border border-sky-100 rounded-2xl p-6 shadow-sm text-left">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Smart Compression</h3>
              <p className="text-slate-500 leading-relaxed">
                Advanced algorithms that compress your photos and videos while maintaining quality.
              </p>
            </div>

            <div className="bg-white/80 border border-sky-100 rounded-2xl p-6 shadow-sm text-left">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-sky-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Safe & Secure</h3>
              <p className="text-slate-500 leading-relaxed">
                Your files are processed locally on your device. No cloud uploads, complete privacy.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-500 px-6 py-3 rounded-xl text-base font-medium">
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </main>
  );
}
