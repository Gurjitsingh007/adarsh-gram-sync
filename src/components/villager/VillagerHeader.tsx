import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function VillagerHeader() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center gap-4 px-6 py-4">
        <SidebarTrigger />
        
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Villager Portal</h2>
          <p className="text-sm text-muted-foreground">Report issues and track development</p>
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-semibold">
          V
        </div>
      </div>
    </header>
  );
}
