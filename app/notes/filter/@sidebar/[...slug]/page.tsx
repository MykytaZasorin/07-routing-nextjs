import Link from "next/link";
import css from "./SidebarNotes.module.css";

const TAGS = ["all", "Todo", "Work", "Personal", "Meeting", "Shopping"];

interface SidebarPageProps {
  params: Promise<{
    slug: string[]; // 👈 Теж міняємо на масив slug
  }>;
}

export default async function SidebarPage({ params }: SidebarPageProps) {
  const resolvedParams = await params;

  // Дістаємо поточний тег з масиву slug
  const rawTag = resolvedParams.slug?.[0] || "all";
  const activeTag = decodeURIComponent(rawTag);

  return (
    <aside className={css.sidebarContainer}>
      <ul className={css.menuList}>
        {TAGS.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${activeTag === tag ? css.active : ""}`}
            >
              {tag === "all" ? "All notes" : tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
