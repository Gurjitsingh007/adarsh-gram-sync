import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Search, FolderKanban, ThumbsUp } from "lucide-react";

export function VillagerHome() {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Report New Issue",
      description: "Report water, electricity, road, or other issues",
      icon: FileText,
      color: "text-primary",
      path: "/villager/report",
    },
    {
      title: "Track Status",
      description: "Check the status of your reported issues",
      icon: Search,
      color: "text-secondary",
      path: "/villager/track",
    },
    {
      title: "View Projects",
      description: "See ongoing development projects in your village",
      icon: FolderKanban,
      color: "text-accent",
      path: "/villager/projects",
    },
    {
      title: "Top Issues",
      description: "View and upvote community issues",
      icon: ThumbsUp,
      color: "text-success",
      path: "/villager/upvoted",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to Gram Darpan</h1>
        <p className="text-muted-foreground">Your voice matters in village development</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {quickActions.map((action) => (
          <Card
            key={action.title}
            className="p-6 hover:shadow-medium transition-all duration-300 cursor-pointer group"
            onClick={() => navigate(action.path)}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform ${action.color}`}>
                <action.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-success rounded-full" />
            <p className="text-sm">Your water supply issue has been resolved</p>
            <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-warning rounded-full" />
            <p className="text-sm">Road repair project is 60% complete</p>
            <span className="text-xs text-muted-foreground ml-auto">5 days ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <p className="text-sm">Electricity issue assigned to PWD</p>
            <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
