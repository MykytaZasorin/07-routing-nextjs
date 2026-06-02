import { ReactNode } from "react";

interface NotesLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: NotesLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {sidebar}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </div>

      {modal}
    </div>
  );
}
