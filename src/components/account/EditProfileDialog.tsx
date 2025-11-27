import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface EditProfileDialogProps {
  currentName: string;
  currentHandle: string;
  onSave: (name: string, handle: string) => void;
}

export const EditProfileDialog = ({ currentName, currentHandle, onSave }: EditProfileDialogProps) => {
  const [name, setName] = useState(currentName);
  const [handle, setHandle] = useState(currentHandle);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSave(name, handle);
    setOpen(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gradient-primary">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="handle">Handle</Label>
            <Input
              id="handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="@yourhandle"
            />
          </div>
          <Button onClick={handleSave} className="w-full gradient-primary">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
