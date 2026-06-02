import SidebarPage from "./[tag]/page";

interface SidebarDefaultProps {
  params: Promise<{ tag: string }>;
}

export default function SidebarDefault({ params }: SidebarDefaultProps) {
  return <SidebarPage params={params} />;
}
