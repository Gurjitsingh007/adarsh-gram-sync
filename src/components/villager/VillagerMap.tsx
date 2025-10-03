import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function VillagerMap() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">नक्शा / Map</h1>
        <p className="text-muted-foreground">View issues and projects on the map</p>
      </div>

      <Card className="p-6">
        <div className="h-[600px] bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">Interactive map showing issue locations</p>
            <p className="text-sm text-muted-foreground">
              Click on markers to view details and upvote
            </p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-destructive" />
            <div>
              <p className="font-semibold">अनसुलझे / Unresolved</p>
              <p className="text-sm text-muted-foreground">Red markers</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-warning" />
            <div>
              <p className="font-semibold">प्रगति में / In Progress</p>
              <p className="text-sm text-muted-foreground">Yellow markers</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-success" />
            <div>
              <p className="font-semibold">हल / Resolved</p>
              <p className="text-sm text-muted-foreground">Green markers</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
