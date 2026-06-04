import NotesClient from "../../Notes.client";

interface TagPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;

  const rawTag = resolvedParams.slug?.[0] || "all";
  const decodedTag = decodeURIComponent(rawTag);

  const currentTag = decodedTag === "all" ? undefined : decodedTag;

  return <NotesClient tag={currentTag} />;
}
