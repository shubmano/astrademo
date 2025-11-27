import { useState } from "react";
import { Hand, MessageCircle, MapPin, Clock, Flame, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeedPostProps {
  username: string;
  userHandle: string;
  profilePicture: string;
  streak: number;
  caption: string;
  workoutType: string;
  duration: string;
  location: string;
  imageUrl: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  exercises?: Array<{ name: string; sets: number; reps: number; weight: number }>;
}

export const FeedPost = ({
  username,
  userHandle,
  profilePicture,
  streak,
  caption,
  workoutType,
  duration,
  location,
  imageUrl,
  likes,
  comments,
  isLiked = false,
  exercises = [],
}: FeedPostProps) => {
  const [showWorkoutDetails, setShowWorkoutDetails] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <Card className="overflow-hidden shadow-medium transition-smooth hover:shadow-strong">
      {/* User Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-primary">
            <AvatarImage src={profilePicture} alt={username} />
            <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">{username}</h3>
            <p className="text-xs text-muted-foreground">{userHandle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-success/10 px-3 py-1.5 rounded-full">
          <Flame className="w-4 h-4 text-success" />
          <span className="text-sm font-bold text-success">{streak}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square bg-muted">
        <img
          src={imageUrl}
          alt="Workout"
          className="w-full h-full object-cover"
        />
        
        {/* Workout Details Toggle Button */}
        {exercises.length > 0 && (
          <button
            onClick={() => setShowWorkoutDetails(!showWorkoutDetails)}
            className="absolute bottom-4 left-4 bg-background/70 backdrop-blur-md p-2 rounded-full hover:bg-background/80 transition-smooth"
          >
            <Info className="w-5 h-5" />
          </button>
        )}

        {/* Workout Details Overlay */}
        {showWorkoutDetails && exercises.length > 0 && (
          <div className="absolute bottom-4 left-16 right-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {exercises.map((exercise, idx) => (
              <div
                key={idx}
                className="bg-background/70 backdrop-blur-md rounded-lg p-3 min-w-[160px] flex-shrink-0"
              >
                <p className="text-xs font-semibold mb-1">{exercise.name}</p>
                <p className="text-xs text-muted-foreground">
                  {exercise.sets}x{exercise.reps} @ {exercise.weight}lbs
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Workout Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-primary font-medium">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-xs">
            {workoutType}
          </div>
          {location && (
            <>
              <button
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs">{location}</span>
              </button>
              {showMap && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowMap(false)}>
                  <Card className="w-full max-w-md p-4">
                    <h3 className="font-semibold mb-2">{location}</h3>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Map view: {location}</p>
                    </div>
                  </Card>
                </div>
              )}
            </>
          )}
        </div>

        {/* Caption */}
        <p className="text-sm">{caption}</p>

        {/* Interactions */}
        <div className="flex items-center gap-4 pt-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 ${
              isLiked ? "text-secondary" : "text-muted-foreground"
            }`}
          >
            <Hand className={`w-5 h-5 ${isLiked ? "fill-secondary" : ""}`} />
            <span className="font-medium">{likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{comments}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
