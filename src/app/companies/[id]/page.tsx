export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Companies page</h1>
    </main>
  );
}
