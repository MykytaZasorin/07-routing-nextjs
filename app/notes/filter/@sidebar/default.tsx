import SidebarPage from "./[...slug]/page";

interface SidebarDefaultProps {
  params: Promise<{
    slug: string[]; // 👈 Змінюємо тип на масив
  }>;
}

export default function SidebarDefault({ params }: SidebarDefaultProps) {
  return <SidebarPage params={params} />;
}
