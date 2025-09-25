import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Clubs</h1>
      <ul className="list-disc pl-6">
        <li>
          <Link href="/dashboard/club-123" className="underline">
            Club 123
          </Link>
        </li>
      </ul>
    </div>
  );
}
