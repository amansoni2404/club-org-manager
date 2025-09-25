type PageProps = {
  params: Promise<{ clubId: string }>;
};

export default async function ClubDashboardPage({ params }: PageProps) {
  const { clubId } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Club {clubId}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Overview
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Announcements
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Events
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Members
        </section>
      </div>
    </div>
  );
}
