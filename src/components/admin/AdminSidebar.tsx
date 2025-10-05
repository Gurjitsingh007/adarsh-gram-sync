import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  AlertCircle,
  Map,
  BarChart3,
  Bell,
  Settings,
  MapPin,
  LogOut,
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Projects", url: "/admin/projects", icon: FolderKanban },
  { title: "Issues", url: "/admin/issues", icon: AlertCircle },
  { title: "Map View", url: "/admin/map", icon: Map },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Notifications", url: "/admin/notifications", icon: Bell },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {open && (
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gram Darpan
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Admin Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
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
       {/* <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all w-full mt-4">
        <LogOut className="w-5 h-5" />
        Logout
      </button> */}

      {/* Bottom Logout Button */}
<div className="p-4 border-t border-muted">
  <button
    className={`group w-full flex items-center gap-2 px-4 py-2 rounded-xl 
    transition-all duration-200 font-medium
    ${
      open
        ? "bg-red-600 text-white hover:bg-red-700 justify-center"
        : "bg-transparent hover:bg-red-100 text-red-600 justify-center"
    }`}
  >
    {/* Show logout arrow icon always */}
    <LogOut
      className={`w-5 h-5 ${
        open ? "text-white" : "text-red-600 group-hover:text-red-700"
      }`}
    />

    {/* Show text only when sidebar expanded */}
    {open && <span>Logout</span>}

    {/* When collapsed, show a visible small arrow indicator */}
    {!open && <span className="text-red-600 text-lg left-margin--5">[↩] </span>}
  </button>
</div>


    </Sidebar>
  );
}
