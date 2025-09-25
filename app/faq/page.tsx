export default function FAQPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">FAQ</h1>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              How do I create a club?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Click the &ldquo;Create Club&rdquo; button in your dashboard and
              fill out the club details.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              Can I invite members to my club?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, you can invite members via email or share an invite link.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              How much does it cost?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Basic features are free. Premium features are available with a
              subscription.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              Can I export my data?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, you can export all your club data in CSV format from the
              settings page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
