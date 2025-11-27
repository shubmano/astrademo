import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Logbook = () => {
  const workoutHistory = [
    {
      date: "Today",
      workouts: [
        { name: "Upper Body Strength", duration: "55m", exercises: 6, type: "Strength" },
      ],
    },
    {
      date: "Yesterday",
      workouts: [
        { name: "Leg Day", duration: "1h 15m", exercises: 7, type: "Strength" },
      ],
    },
    {
      date: "2 days ago",
      workouts: [
        { name: "HIIT Cardio", duration: "30m", exercises: 5, type: "HIIT" },
      ],
    },
  ];

  const savedWorkouts = [
    { name: "Beginner Push", exercises: 5, difficulty: "Beginner", isCommunity: true },
    { name: "Full Body Blast", exercises: 8, difficulty: "Advanced", isCommunity: true },
    { name: "My Custom Routine", exercises: 6, difficulty: "Intermediate", isCommunity: false },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-hero">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Logbook</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-4">
              <TabsTrigger value="history" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                History
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Saved
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-4">
              {/* Weekly Summary Card - Moved to top */}
              <Card className="p-6 gradient-primary shadow-medium">
                <h3 className="font-bold text-white mb-4">This Week</h3>
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs opacity-90">Workouts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4h 30m</div>
                    <div className="text-xs opacity-90">Total Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">27</div>
                    <div className="text-xs opacity-90">Exercises</div>
                  </div>
                </div>
              </Card>

              {workoutHistory.map((day, dayIndex) => (
                <div key={dayIndex} className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground px-1">
                    {day.date}
                  </h3>
                  {day.workouts.map((workout, workoutIndex) => (
                    <Card
                      key={workoutIndex}
                      className="p-4 shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold mb-1">{workout.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{workout.duration}</span>
                            <span>•</span>
                            <span>{workout.exercises} exercises</span>
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                          {workout.type}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="saved" className="space-y-3">
              {savedWorkouts.map((workout, index) => (
                <Card
                  key={index}
                  className="p-4 shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{workout.name}</h4>
                        {workout.isCommunity && (
                          <Badge variant="outline" className="text-xs">
                            Community
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {workout.exercises} exercises
                      </p>
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
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Logbook;
