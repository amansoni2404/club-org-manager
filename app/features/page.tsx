export default function FeaturesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Features</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Club Management</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage multiple clubs with custom settings and
              permissions.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Event Planning</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Schedule events, send reminders, and track attendance
              automatically.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Member Directory</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Keep track of all members with contact info and membership status.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Announcements</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Send updates and announcements to all members instantly.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">File Sharing</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Share documents, photos, and resources with your club members.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Track engagement, attendance, and growth with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
