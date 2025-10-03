import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const mockIssues = [
  { id: "ISS-2024-001", category: "Water", status: "In Progress", date: "2024-01-15", description: "Water supply disruption in Ward 2" },
  { id: "ISS-2024-003", category: "Electricity", status: "Resolved", date: "2024-01-10", description: "Street light not working" },
];

export function TrackStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockIssues>([]);

  const handleSearch = () => {
    // Mock search - in real app, this would query the backend
    setSearchResults(mockIssues);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">स्थिति ट्रैक करें / Track Status</h1>
        <p className="text-muted-foreground">Search by Issue ID or Phone Number</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">मुद्दा आईडी या फोन / Issue ID or Phone</Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="Enter Issue ID or Phone Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Issues</h2>
          {searchResults.map((issue) => (
            <Card key={issue.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{issue.category}</h3>
                    <p className="text-sm text-muted-foreground">{issue.id}</p>
                  </div>
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
                </div>

                <p className="text-sm">{issue.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Reported: {issue.date}</span>
                </div>

                {issue.status === "In Progress" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-warning w-[45%]" />
                    </div>
                  </div>
                )}

                {issue.status === "Resolved" && (
                  <div className="p-3 bg-success/10 text-success rounded-lg text-sm">
                    ✓ This issue has been resolved. Thank you for your patience!
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
