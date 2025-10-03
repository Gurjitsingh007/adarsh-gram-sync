import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { AdminProjects } from "@/components/admin/AdminProjects";
import { AdminIssues } from "@/components/admin/AdminIssues";
import { AdminMap } from "@/components/admin/AdminMap";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<AdminOverview />} />
              <Route path="/projects" element={<AdminProjects />} />
              <Route path="/issues" element={<AdminIssues />} />
              <Route path="/map" element={<AdminMap />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
