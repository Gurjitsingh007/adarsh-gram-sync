import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Droplet, Zap, Heart, GraduationCap, Wifi, Construction, Brush,} from "lucide-react";

const categories = [
  { id: "water", icon: Droplet, label: "पानी / Water", color: "text-blue-500" },
  { id: "electricity", icon: Zap, label: "बिजली / Electricity", color: "text-yellow-500" },
  { id: "health", icon: Heart, label: "स्वास्थ्य / Health", color: "text-red-500" },
  { id: "education", icon: GraduationCap, label: "शिक्षा / Education", color: "text-purple-500" },
  { id: "connectivity", icon: Wifi, label: "कनेक्टिविटी / Connectivity", color: "text-indigo-500" },
  { id: "road", icon: Construction, label: "सड़क / Road", color: "text-orange-500" },
  { id: "sanitation", icon: Brush, label: "स्वच्छता / Sanitation", color: "text-green-500" },
];

export function ReportIssue() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Issue Reported Successfully",
      description: "Your issue has been submitted and will be reviewed shortly.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">रिपोर्ट मुद्दा / Report Issue</h1>
        <p className="text-muted-foreground">Select a category and describe your issue</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">श्रेणी चुनें / Select Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="category"
              size="category"
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "border-primary bg-primary/5" : ""}
            >
              <category.icon className={`w-12 h-12 ${category.color}`} />
              <span className="font-semibold text-center">{category.label}</span>
            </Button>
          ))}
        </div>
      </Card>

      {selectedCategory && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">विवरण / Issue Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">नाम / Name *</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">फ़ोन / Phone *</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" required />
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-4"> 

            <div className="space-y-2">
              <Label htmlFor="village">गांव / Village *</Label>
              <Input id="village" placeholder="Enter village name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="district">जिला / District *</Label>
              <Input id="district" placeholder="Enter District name" required />
            </div>
          </div> 

            <div className="space-y-2">
              <Label htmlFor="description">विवरण / Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail..."
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">फोटो / Photo</Label>
              <Input id="photo" type="file" accept="image/video*" />
              <p className="text-sm text-muted-foreground">Upload a photo of the issue (optional)</p>
            </div>

            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <p className="text-sm text-muted-foreground">GPS location will be captured automatically</p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" size="lg" className="flex-1">
                Submit Issue
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={() => setSelectedCategory(null)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
