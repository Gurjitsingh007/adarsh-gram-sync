import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { VillagerSidebar } from "@/components/villager/VillagerSidebar";
import { VillagerHeader } from "@/components/villager/VillagerHeader";
import { VillagerHome } from "@/components/villager/VillagerHome";
import { ReportIssue } from "@/components/villager/ReportIssue";
import { TrackStatus } from "@/components/villager/TrackStatus";
import { ViewProjects } from "@/components/villager/ViewProjects";
import { VillagerMap } from "@/components/villager/VillagerMap";
import { UpvotedIssues } from "@/components/villager/UpvotedIssues";

const VillagerPortal = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <VillagerSidebar />
        <div className="flex-1 flex flex-col">
          <VillagerHeader />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<VillagerHome />} />
              <Route path="/report" element={<ReportIssue />} />
              <Route path="/track" element={<TrackStatus />} />
              <Route path="/projects" element={<ViewProjects />} />
              <Route path="/map" element={<VillagerMap />} />
              <Route path="/upvoted" element={<UpvotedIssues />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default VillagerPortal;
