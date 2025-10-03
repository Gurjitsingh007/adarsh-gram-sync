import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const categoryData = [
  { name: "Water", issues: 12 },
  { name: "Electricity", issues: 8 },
  { name: "Health", issues: 5 },
  { name: "Education", issues: 4 },
  { name: "Roads", issues: 9 },
  { name: "Connectivity", issues: 3 },
];

const villageData = [
  { name: "Rampur", score: 85 },
  { name: "Shivpur", score: 72 },
  { name: "Ganeshpur", score: 90 },
  { name: "Krishna Nagar", score: 68 },
  { name: "Mahesh Gram", score: 78 },
];

const timelineData = [
  { month: "Jul", completed: 8 },
  { month: "Aug", completed: 12 },
  { month: "Sep", completed: 15 },
  { month: "Oct", completed: 18 },
  { month: "Nov", completed: 16 },
  { month: "Dec", completed: 20 },
  { month: "Jan", completed: 14 },
];

const COLORS = ["hsl(142 65% 45%)", "hsl(210 70% 55%)", "hsl(30 90% 60%)", "hsl(0 84% 60%)", "hsl(45 90% 60%)", "hsl(260 60% 55%)"];

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Data insights and infrastructure gap analysis</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Issues by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="issues" fill="hsl(142 65% 45%)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Village Priority Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={villageData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="score" fill="hsl(210 70% 55%)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Project Completion Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="hsl(30 90% 60%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Infrastructure Gaps Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="issues"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
