import { Heart, MessageCircle, MapPin, Clock, Flame } from "lucide-react";
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
}: FeedPostProps) => {
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
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs">{location}</span>
            </div>
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
            <Heart className={`w-5 h-5 ${isLiked ? "fill-secondary" : ""}`} />
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
