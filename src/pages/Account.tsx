import { useState } from "react";
import { Share2, Flame, TrendingUp, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SettingsDialog } from "@/components/account/SettingsDialog";
import { EditProfileDialog } from "@/components/account/EditProfileDialog";

const Account = () => {
  const [userName, setUserName] = useState("John Doe");
  const [userHandle, setUserHandle] = useState("@johndoe");

  const userStats = {
    followers: 234,
    following: 189,
    workouts: 67,
    streak: 12,
  };

  const handleProfileUpdate = (name: string, handle: string) => {
    setUserName(name);
    setUserHandle(handle);
  };

  const progressData = [
    { exercise: "Bench Press", improvement: "+15 lbs", percentage: 12 },
    { exercise: "Squat", improvement: "+25 lbs", percentage: 18 },
    { exercise: "Deadlift", improvement: "+30 lbs", percentage: 15 },
  ];

  const workoutDays = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];

  return (
    <div className="min-h-screen pb-20 bg-gradient-hero">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Profile</h1>
            <SettingsDialog />
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-4 space-y-6">
          <Card className="p-6 shadow-medium">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="w-20 h-20 border-4 border-primary">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{userName}</h2>
                <p className="text-muted-foreground mb-3">{userHandle}</p>
                <div className="flex items-center gap-2">
                  <EditProfileDialog
                    currentName={userName}
                    currentHandle={userHandle}
                    onSave={handleProfileUpdate}
                  />
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="font-bold text-lg">{userStats.workouts}</div>
                <div className="text-xs text-muted-foreground">Workouts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{userStats.followers}</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{userStats.following}</div>
                <div className="text-xs text-muted-foreground">Following</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 text-success" />
                  <span className="font-bold text-lg text-success">{userStats.streak}</span>
                </div>
                <div className="text-xs text-muted-foreground">Streak</div>
              </div>
            </div>
          </Card>

          {/* Referral Section */}
          <Card className="p-4 gradient-secondary shadow-medium">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold mb-1">Refer a Friend</h3>
                <p className="text-sm opacity-90">Code: JOHN2024</p>
              </div>
              <Button variant="secondary" size="sm">
                Share Code
              </Button>
            </div>
          </Card>

          {/* Workout Calendar */}
          <Card className="p-4 shadow-medium">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="font-bold">Workout Calendar</h3>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {workoutDays.map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-smooth ${
                    day
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </Card>

          {/* Progress Dashboard */}
          <Card className="p-4 shadow-medium">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-bold">Progress Tracking</h3>
            </div>
            <div className="space-y-3">
              {progressData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.exercise}</span>
                    <Badge className="bg-success/10 text-success">
                      {item.improvement}
                    </Badge>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;
