import { Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WorkoutTemplate } from "@/data/workoutTemplates";

interface WorkoutTemplateCardProps {
  template: WorkoutTemplate;
  onClick?: () => void;
}

export const WorkoutTemplateCard = ({ template, onClick }: WorkoutTemplateCardProps) => {
  const difficultyColors = {
    Beginner: "bg-success/10 text-success",
    Intermediate: "bg-primary/10 text-primary",
    Advanced: "bg-secondary/10 text-secondary",
  };

  return (
    <Card
      className="p-4 shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Dumbbell className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-1">{template.name}</h3>
          <p className="text-sm text-muted-foreground">
            {template.type} • {template.duration}
          </p>
        </div>
        <Badge className={difficultyColors[template.difficulty]}>
          {template.difficulty}
        </Badge>
      </div>

      <div className="space-y-3">
        {template.exercises.map((exercise, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-sm font-medium">• {exercise.name}</p>
            <div className="flex items-center gap-2 ml-4">
              <Badge variant="outline" className="text-xs bg-primary/5">
                {exercise.sets}
              </Badge>
              <Badge variant="outline" className="text-xs bg-secondary/5">
                {exercise.weight}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground ml-4 leading-relaxed">
              {exercise.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
