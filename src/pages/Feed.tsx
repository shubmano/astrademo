import { FeedPost } from "@/components/feed/FeedPost";
import { SuggestedUser } from "@/components/feed/SuggestedUser";

const Feed = () => {
  const mockPosts = [
    {
      username: "Alex Chen",
      userHandle: "@alexchen",
      profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      streak: 12,
      caption: "Crushed leg day today! Feeling stronger every session 💪🔥",
      workoutType: "Leg Day",
      duration: "1h 15m",
      location: "PowerGym NYC",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      likes: 47,
      comments: 8,
      isLiked: true,
      exercises: [
        { name: "Squat", sets: 4, reps: 8, weight: 185 },
        { name: "Leg Press", sets: 3, reps: 12, weight: 270 },
        { name: "Leg Curls", sets: 3, reps: 12, weight: 90 },
      ],
    },
    {
      username: "Sarah Martinez",
      userHandle: "@sarahfit",
      profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      streak: 8,
      caption: "Upper body burn! New PR on bench press 🎯",
      workoutType: "Upper Body",
      duration: "55m",
      location: "Elite Fitness",
      imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
      likes: 63,
      comments: 12,
      exercises: [
        { name: "Bench Press", sets: 4, reps: 6, weight: 135 },
        { name: "Rows", sets: 4, reps: 8, weight: 95 },
        { name: "Shoulder Press", sets: 3, reps: 10, weight: 65 },
      ],
    },
  ];

  const suggestedUsers = [
    {
      username: "Mike Johnson",
      userHandle: "@mikej",
      profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      mutualFriends: 5,
      location: "Brooklyn",
      workoutType: "Strength Training",
    },
    {
      username: "Emma Davis",
      userHandle: "@emmad",
      profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      mutualFriends: 3,
      location: "Manhattan",
      workoutType: "HIIT",
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-hero">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
          <div className="p-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Astra
            </h1>
          </div>
        </div>

        {/* Feed Content */}
        <div className="p-4 space-y-4">
          {/* Posts from Friends */}
          <div className="space-y-4">
            {mockPosts.map((post, index) => (
              <FeedPost key={index} {...post} />
            ))}
          </div>

          {/* Suggested Users Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4 px-1">
              Suggested Lifters
            </h2>
            <div className="space-y-3">
              {suggestedUsers.map((user, index) => (
                <SuggestedUser key={index} {...user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
