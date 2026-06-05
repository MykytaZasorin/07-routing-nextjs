import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface TagPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;

  const rawTag = resolvedParams.slug?.[0] || "all";
  const decodedTag = decodeURIComponent(rawTag);

  // 🚀 Для запиту на сервері (prefetch) нам потрібен undefined замість "all"
  const apiTag = decodedTag === "all" ? undefined : decodedTag;

  // Синхронізуємо константи з Notes.client.tsx для першої сторінки
  const INITIAL_PAGE = 1;
  const INITIAL_SEARCH = "";
  const PER_PAGE = 12;

  const queryClient = new QueryClient();

  // Префетч з точним збігом ключів і параметрів вашого клієнтського useQuery
  await queryClient.prefetchQuery({
    queryKey: ["notes", INITIAL_PAGE, INITIAL_SEARCH, apiTag],
    queryFn: () =>
      fetchNotes({
        page: INITIAL_PAGE,
        perPage: PER_PAGE,
        search: INITIAL_SEARCH,
        tag: apiTag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* 🚀 Передаємо оригінальний decodedTag (наприклад, "all" або "work"), 
          щоб клієнт міг чітко відстежувати перемикання вкладок */}
      <NotesClient tag={decodedTag} />
    </HydrationBoundary>
  );
}
