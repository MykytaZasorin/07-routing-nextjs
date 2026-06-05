// import NoteDetailsPage from "../../../../@modal/(.)notes/[id]/page";

// export default NoteDetailsPage;
// app/@modal/(.)notes/[id]/page.tsx
import NotePreviewClient from "./NotePreview.client";

interface NotePreviewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NotePreviewPage({
  params,
}: NotePreviewPageProps) {
  return <NotePreviewClient params={params} />;
}
