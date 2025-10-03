import { Card } from "@/components/ui/card";
import { Users, AlertCircle, FolderKanban, CheckCircle } from "lucide-react";

const stats = [
  { title: "Total Villages", value: "142", icon: Users, color: "text-primary" },
  { title: "Open Issues", value: "28", icon: AlertCircle, color: "text-destructive" },
  { title: "Projects in Progress", value: "15", icon: FolderKanban, color: "text-secondary" },
  { title: "Completed Projects", value: "87", icon: CheckCircle, color: "text-success" },
];

const recentIssues = [
  { id: "ISS-2024-001", category: "Water", village: "Rampur", status: "Pending", assignedTo: "PWD", date: "2024-01-15" },
  { id: "ISS-2024-002", category: "Electricity", village: "Shivpur", status: "In Progress", assignedTo: "Electricity Board", date: "2024-01-14" },
  { id: "ISS-2024-003", category: "Road", village: "Ganeshpur", status: "Resolved", assignedTo: "PWD", date: "2024-01-13" },
  { id: "ISS-2024-004", category: "Health", village: "Krishna Nagar", status: "Pending", assignedTo: "Health Dept", date: "2024-01-12" },
  { id: "ISS-2024-005", category: "Education", village: "Mahesh Gram", status: "In Progress", assignedTo: "Education Dept", date: "2024-01-11" },
];

export function AdminOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of all villages and development projects</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-medium transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Interactive Map Placeholder */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Villages Map</h2>
        <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
          <p className="text-muted-foreground">Interactive map will be displayed here</p>
        </div>
      </Card>

      {/* Recent Issues Table */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Issues</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Issue ID</th>
                <th className="text-left py-3 px-4 font-semibold">Category</th>
                <th className="text-left py-3 px-4 font-semibold">Village</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Assigned To</th>
                <th className="text-left py-3 px-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentIssues.map((issue) => (
                <tr key={issue.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">{issue.id}</td>
                  <td className="py-3 px-4">{issue.category}</td>
                  <td className="py-3 px-4">{issue.village}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.status === "Resolved"
                          ? "bg-success/10 text-success"
                          : issue.status === "In Progress"
                          ? "bg-warning/10 text-warning"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{issue.assignedTo}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{issue.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
