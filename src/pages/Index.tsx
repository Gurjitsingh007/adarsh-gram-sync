import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gram Darpan
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Digital Twin for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Adarsh Gram Villages
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparency, Inclusivity, and Real-time Monitoring for Villages
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 pt-12">
            <div
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary cursor-pointer group"
              onClick={() => navigate("/admin")}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Admin Portal</h3>
                <p className="text-muted-foreground">
                  Monitor projects, review issues, analyze data, and coordinate development initiatives
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Login as Admin
                </Button>
              </div>
            </div>

            <div
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-secondary cursor-pointer group"
              onClick={() => navigate("/villager")}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Villager Portal</h3>
                <p className="text-muted-foreground">
                  Report issues, track status, view projects, and participate in community development
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Login as Villager
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/50 rounded-xl p-6 space-y-2">
              <div className="text-3xl">💧</div>
              <h4 className="font-semibold">Issue Reporting</h4>
              <p className="text-sm text-muted-foreground">
                Report water, electricity, health, and infrastructure issues
              </p>
            </div>
            <div className="bg-card/50 rounded-xl p-6 space-y-2">
              <div className="text-3xl">🗺️</div>
              <h4 className="font-semibold">Real-time Mapping</h4>
              <p className="text-sm text-muted-foreground">
                Interactive maps showing issue locations and project progress
              </p>
            </div>
            <div className="bg-card/50 rounded-xl p-6 space-y-2">
              <div className="text-3xl">👍</div>
              <h4 className="font-semibold">Community Voting</h4>
              <p className="text-sm text-muted-foreground">
                Upvote issues to help prioritize community needs
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
