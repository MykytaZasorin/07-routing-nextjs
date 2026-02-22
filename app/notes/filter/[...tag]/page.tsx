import NotesClient from "@/app/notes/Notes.client";

interface Props {
  params: {
    tag?: string[];
  };
}

export default function FilterPage({ params }: Props) {
  const selectedTag = params.tag?.[0];

  const tag = selectedTag === "all" ? undefined : selectedTag;

  return <NotesClient tag={tag} />;
}
