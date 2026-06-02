import { ReactNode } from "react";

interface FilterLayoutProps {
  children: ReactNode; // Сюди потрапить сторінка з папки [tag]
  sidebar: ReactNode; // Сюди потрапить слот @sidebar
  modal: ReactNode; // Сюди потрапить слот @modal
}

export default function FilterLayout({
  children,
  sidebar,
  modal,
}: FilterLayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
      {sidebar}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8f9fa",
        }}
      >
        {children}
      </div>

      {modal}
    </div>
  );
}
