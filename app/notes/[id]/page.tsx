interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: Props) {
  const resolvedParams = await params;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Note Detailed Page</h1>
      <p>ID: {resolvedParams.id}</p>
    </div>
  );
}
