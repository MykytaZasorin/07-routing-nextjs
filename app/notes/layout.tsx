import { ReactNode } from "react";

// 1. Залишаємо ТІЛЬКИ children. Жодних sidebar чи modal тут бути не повинно!
interface NotesLayoutProps {
  children: ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {children}
    </div>
  );
}
