// app/notes/[id]/page.tsx
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NoteDetailsClient from "../../@modal/(.).notes/[id]/NoteDetails.client";
import { fetchNoteById } from "@/lib/api/notes";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div style={{ padding: "40px 20px", minHeight: "80vh" }}>
        <NoteDetailsClient noteId={id} />
      </div>
    </HydrationBoundary>
  );
}
