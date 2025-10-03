import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const projects = [
  { id: 1, name: "Water Pipeline Extension", department: "PWD", village: "Rampur", progress: 75, startDate: "2024-01-10", status: "In Progress" },
  { id: 2, name: "Community Health Center", department: "Health Dept", village: "Shivpur", progress: 45, startDate: "2024-01-05", status: "In Progress" },
  { id: 3, name: "Road Repair Project", department: "PWD", village: "Ganeshpur", progress: 100, startDate: "2023-12-01", status: "Completed" },
  { id: 4, name: "School Building Renovation", department: "Education Dept", village: "Krishna Nagar", progress: 30, startDate: "2024-01-15", status: "In Progress" },
  { id: 5, name: "Solar Street Lights", department: "Electricity Board", village: "Mahesh Gram", progress: 60, startDate: "2024-01-08", status: "In Progress" },
];

export function AdminProjects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Monitor all ongoing and completed development projects</p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-medium transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.village}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Department:</span>
                  <p className="font-medium">{project.department}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Start Date:</span>
                  <p className="font-medium">{project.startDate}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
