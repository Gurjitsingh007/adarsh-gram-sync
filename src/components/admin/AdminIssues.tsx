import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MapPin, Calendar } from "lucide-react";

const issues = [
  { id: "ISS-2024-001", category: "💧 Water", title: "Water supply disruption", village: "Rampur", upvotes: 45, status: "Pending", priority: "High", date: "2024-01-15", description: "No water supply for 3 days in Ward 2" },
  { id: "ISS-2024-002", category: "⚡ Electricity", title: "Frequent power cuts", village: "Shivpur", upvotes: 32, status: "In Progress", priority: "Medium", date: "2024-01-14", description: "Power cuts lasting 4-5 hours daily" },
  { id: "ISS-2024-003", category: "🛣️ Road", title: "Damaged main road", village: "Ganeshpur", upvotes: 28, status: "Resolved", priority: "High", date: "2024-01-13", description: "Potholes on main village road causing accidents" },
  { id: "ISS-2024-004", category: "🏥 Health", title: "No doctor at PHC", village: "Krishna Nagar", upvotes: 52, status: "Pending", priority: "Critical", date: "2024-01-12", description: "Primary Health Center without doctor for 2 weeks" },
  { id: "ISS-2024-005", category: "🏫 Education", title: "School building needs repair", village: "Mahesh Gram", upvotes: 19, status: "In Progress", priority: "Medium", date: "2024-01-11", description: "Roof leaking in classrooms during rain" },
];

export function AdminIssues() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Issues</h1>
          <p className="text-muted-foreground">Review and manage reported issues from villages</p>
        </div>
        <Button variant="outline">
          Filter by Priority
        </Button>
      </div>

      <div className="grid gap-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="p-6 hover:shadow-medium transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{issue.category.split(" ")[0]}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.id}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{issue.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {issue.village}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {issue.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{issue.upvotes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge
                    variant={
                      issue.priority === "Critical"
                        ? "destructive"
                        : issue.priority === "High"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {issue.priority}
                  </Badge>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      issue.status === "Resolved"
                        ? "bg-success/10 text-success"
                        : issue.status === "In Progress"
                        ? "bg-warning/10 text-warning"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {issue.status}
                  </span>
                  <Button size="sm" variant="outline">
                    Assign
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
