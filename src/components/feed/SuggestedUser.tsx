import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";

interface SuggestedUserProps {
  username: string;
  userHandle: string;
  profilePicture: string;
  mutualFriends: number;
  location: string;
  workoutType: string;
}

export const SuggestedUser = ({
  username,
  userHandle,
  profilePicture,
  mutualFriends,
  location,
  workoutType,
}: SuggestedUserProps) => {
  return (
    <Card className="p-4 shadow-soft hover:shadow-medium transition-smooth">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="w-14 h-14 border-2 border-primary/20">
          <AvatarImage src={profilePicture} alt={username} />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{username}</h4>
          <p className="text-xs text-muted-foreground">{userHandle}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{mutualFriends} mutual</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
          {workoutType}
        </span>
        <Button size="sm" className="gradient-primary shadow-soft">
          Follow
        </Button>
      </div>
    </Card>
  );
};
