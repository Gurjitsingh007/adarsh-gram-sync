import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  Search,
  FolderKanban,
  Map,
  Bell,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "🏠 Home", url: "/villager", icon: Home },
  { title: "📝 Report Issue", url: "/villager/report", icon: FileText },
  { title: "🔍 Track Status", url: "/villager/track", icon: Search },
  { title: "📊 Projects", url: "/villager/projects", icon: FolderKanban },
  { title: "🗺️ Map", url: "/villager/map", icon: Map },
  { title: "🔔 Notifications", url: "/villager/notifications", icon: Bell },
  { title: "👍 Upvoted Issues", url: "/villager/upvoted", icon: ThumbsUp },
];

export function VillagerSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-secondary" />
          {open && (
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gram Darpan
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Villager Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/villager"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-secondary/10 text-secondary font-medium"
                          : "hover:bg-muted"
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
