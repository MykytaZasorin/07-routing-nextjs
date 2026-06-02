import NotesClient from "../../Notes.client";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;

  const decodedTag = decodeURIComponent(resolvedParams.tag);

  const currentTag = decodedTag === "all" ? undefined : decodedTag;

  return <NotesClient tag={currentTag} />;
}
