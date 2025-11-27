import { useState } from "react";
import { Play, Pause, RotateCcw, Plus, Camera, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Workout = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [exercises, setExercises] = useState([
    { id: 1, name: "Bench Press", sets: [{ reps: 10, weight: 135 }] },
  ]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const addExercise = () => {
    setExercises([
      ...exercises,
      { id: Date.now(), name: "", sets: [{ reps: 0, weight: 0 }] },
    ]);
  };

  const addSet = (exerciseId: number) => {
    setExercises(
      exercises.map((ex) =>
        ex.id === exerciseId
          ? { ...ex, sets: [...ex.sets, { reps: 0, weight: 0 }] }
          : ex
      )
    );
  };

  return (
    <div className="min-h-screen pb-24 bg-gradient-hero">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Track Workout</h1>
            
            {/* Workout Type Selector */}
            <Select defaultValue="strength">
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select workout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strength">Strength Training</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="hiit">HIIT</SelectItem>
                <SelectItem value="yoga">Yoga</SelectItem>
              </SelectContent>
            </Select>

            {/* Timer */}
            <Card className="p-6 shadow-medium gradient-primary">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-white">
                  {formatTime(timerSeconds)}
                </div>
                <div className="flex justify-center gap-3">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="shadow-soft"
                  >
                    {isTimerRunning ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setTimerSeconds(0)}
                    className="shadow-soft"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Exercise Tracking */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Exercises</h2>
            <Button onClick={addExercise} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Exercise
            </Button>
          </div>

          {exercises.map((exercise, exerciseIndex) => (
            <Card key={exercise.id} className="p-4 shadow-medium">
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search exercise..."
                    value={exercise.name}
                    onChange={(e) => {
                      const newExercises = [...exercises];
                      newExercises[exerciseIndex].name = e.target.value;
                      setExercises(newExercises);
                    }}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-2">
                  {exercise.sets.map((set, setIndex) => (
                    <div key={setIndex} className="flex items-center gap-2">
                      <Badge variant="outline" className="w-12 justify-center">
                        Set {setIndex + 1}
                      </Badge>
                      <Input
                        type="number"
                        placeholder="Reps"
                        value={set.reps || ""}
                        onChange={(e) => {
                          const newExercises = [...exercises];
                          newExercises[exerciseIndex].sets[setIndex].reps =
                            parseInt(e.target.value) || 0;
                          setExercises(newExercises);
                        }}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        placeholder="Weight (lbs)"
                        value={set.weight || ""}
                        onChange={(e) => {
                          const newExercises = [...exercises];
                          newExercises[exerciseIndex].sets[setIndex].weight =
                            parseInt(e.target.value) || 0;
                          setExercises(newExercises);
                        }}
                        className="flex-1"
                      />
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addSet(exercise.id)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Set
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Complete Workout Button */}
          <div className="space-y-3 pt-4">
            <Button
              size="lg"
              className="w-full gradient-secondary shadow-strong"
            >
              <Camera className="w-5 h-5 mr-2" />
              Take Photo & Share
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
            >
              Save Workout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
