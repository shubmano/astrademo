import { useState } from "react";
import { Search as SearchIcon, User, Dumbbell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockUsers = [
    { name: "Alex Chen", handle: "@alexchen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex", mutualFriends: 5 },
    { name: "Sarah Martinez", handle: "@sarahfit", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah", mutualFriends: 3 },
    { name: "Mike Johnson", handle: "@mikej", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike", mutualFriends: 8 },
  ];

  const mockWorkouts = [
    { name: "Beginner Push", exercises: 5, duration: "45m", difficulty: "Beginner" },
    { name: "Shoulder Press", exercises: 4, duration: "30m", difficulty: "Intermediate" },
    { name: "Full Body Blast", exercises: 8, duration: "60m", difficulty: "Advanced" },
    { name: "Core Strength", exercises: 6, duration: "35m", difficulty: "Intermediate" },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-hero">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Discover</h1>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search users or workouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </div>

        {/* Search Content */}
        <div className="p-4">
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-4">
              <TabsTrigger value="users" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="workouts" className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4" />
                Workouts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-3">
              {mockUsers.map((user, index) => (
                <Card key={index} className="p-4 shadow-soft hover:shadow-medium transition-smooth">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-sm">{user.name}</h3>
                        <p className="text-xs text-muted-foreground">{user.handle}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {user.mutualFriends} mutual friends
                        </p>
                      </div>
                    </div>
                    <Button size="sm" className="gradient-primary">
                      Follow
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="workouts" className="space-y-3">
              {mockWorkouts.map((workout, index) => (
                <Card key={index} className="p-4 shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{workout.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {workout.exercises} exercises
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {workout.duration}
                        </Badge>
                      </div>
                    </div>
                    <Badge
                      className={
                        workout.difficulty === "Beginner"
                          ? "bg-success/10 text-success"
                          : workout.difficulty === "Intermediate"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }
                    >
                      {workout.difficulty}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Workout
                  </Button>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Search;
