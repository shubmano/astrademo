import { Settings, MessageSquare, AlertCircle, Lightbulb, Moon, Sun, Dumbbell, LogOut, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const SettingsDialog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [useKg, setUseKg] = useState(false);

  const handleFeedback = (type: string) => {
    toast({
      title: "Thank you!",
      description: `Your ${type} has been received.`,
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "We're sorry to see you go. Your account will be deleted within 24 hours.",
      variant: "destructive",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Feedback Section */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Feedback
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFeedback("problem report")}
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Report a Problem
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFeedback("feedback")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Give Feedback
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFeedback("feature request")}
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Request a Feature
              </Button>
            </div>
          </Card>

          {/* Appearance */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Appearance</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {darkMode ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </Card>

          {/* Workout Preferences */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              Workout Preferences
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="unit-preference">
                Weight Unit: {useKg ? "Kilograms" : "Pounds"}
              </Label>
              <Switch
                id="unit-preference"
                checked={useKg}
                onCheckedChange={setUseKg}
              />
            </div>
          </Card>

          <Separator />

          {/* Account Actions */}
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="w-full justify-start"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
