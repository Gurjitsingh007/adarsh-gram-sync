import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const initialIssues = [
  { id: 1, title: "No doctor at Primary Health Center", category: " Health", village: "Krishna Nagar", upvotes: 52, userUpvoted: false },
  { id: 2, title: "Water supply disruption", category: " Water", village: "Rampur", upvotes: 45, userUpvoted: true },
  { id: 3, title: "Frequent power cuts", category: " Electricity", village: "Shivpur", upvotes: 32, userUpvoted: false },
  { id: 4, title: "Damaged main road", category: " Road", village: "Ganeshpur", upvotes: 28, userUpvoted: false },
  { id: 5, title: "School building needs repair", category: " Education", village: "Mahesh Gram", upvotes: 19, userUpvoted: true },
];

export function UpvotedIssues() {
  const [issues, setIssues] = useState(initialIssues);

  const handleUpvote = (id: number) => {
    setIssues(issues.map(issue => 
      issue.id === id 
        ? { ...issue, upvotes: issue.userUpvoted ? issue.upvotes - 1 : issue.upvotes + 1, userUpvoted: !issue.userUpvoted }
        : issue
    ).sort((a, b) => b.upvotes - a.upvotes));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">सामुदायिक मुद्दे / Community Issues</h1>
        <p className="text-muted-foreground">Top voted issues from the community</p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary">
        <div className="flex items-center gap-3">
          <ThumbsUp className="w-5 h-5 text-primary" />
          <p className="text-sm">
            <strong>Upvote issues</strong> to help prioritize what matters most to your community
          </p>
        </div>
      </Card>

      <div className="grid gap-4">
        {issues.map((issue, index) => (
          <Card key={issue.id} className="p-6 hover:shadow-medium transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">#{index + 1}</span>
                </div>
                <Button
                  variant={issue.userUpvoted ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleUpvote(issue.id)}
                  className="flex-col h-auto py-2 px-3"
                >
                  <ThumbsUp className={`w-4 h-4 ${issue.userUpvoted ? "fill-current" : ""}`} />
                  <span className="text-xs font-semibold">{issue.upvotes}</span>
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{issue.title}</h3>
                    <p className="text-sm text-muted-foreground">{issue.village}</p>
                  </div>
                  <span className="text-2xl">{issue.category.split(" ")[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium px-2 py-1 bg-muted rounded">
                    {issue.category}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
