import { FC, ReactNode } from "react";

interface FilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode; // 👈 Додаємо сюди
}

const FilterLayout: FC<FilterLayoutProps> = ({ children, sidebar, modal }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <aside>{sidebar}</aside>

      <main style={{ flex: 1 }}>{children}</main>

      {/* 🔮 Виводимо модалку тут: */}
      {modal}
    </div>
  );
};

export default FilterLayout;
