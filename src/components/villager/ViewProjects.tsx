import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const projects = [
  { id: 1, name: "Water Pipeline Extension", department: "PWD", progress: 75, startDate: "2024-01-10" },
  { id: 2, name: "Community Health Center", department: "Health Dept", progress: 45, startDate: "2024-01-05" },
  { id: 3, name: "Road Repair Project", department: "PWD", progress: 100, startDate: "2023-12-01" },
  { id: 4, name: "School Building Renovation", department: "Education Dept", progress: 30, startDate: "2024-01-15" },
  { id: 5, name: "Solar Street Lights", department: "Electricity Board", progress: 60, startDate: "2024-01-08" },
];

export function ViewProjects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">परियोजनाएं / Projects</h1>
        <p className="text-muted-foreground">View ongoing development projects in your village</p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-medium transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.department}</p>
                </div>
                {project.progress === 100 && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                    Completed
                  </span>
                )}
              </div>

              <div className="text-sm text-muted-foreground">
                <span>Started: {project.startDate}</span>
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
