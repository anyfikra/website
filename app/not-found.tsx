export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Oops! Page Not Found</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Looks like this page took a wrong turn.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please go back to the home page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
