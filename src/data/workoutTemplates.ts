export interface Exercise {
  name: string;
  sets: string;
  weight: string;
  description: string;
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  type: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  exercises: Exercise[];
}

export const workoutTemplates: WorkoutTemplate[] = [
  // UPPER BODY
  {
    id: "beginner-upper",
    name: "Beginner Upper",
    type: "Upper Body",
    duration: "45m",
    difficulty: "Beginner",
    exercises: [
      {
        name: "Bench Press (Barbell)",
        sets: "3x8",
        weight: "95 lb (men) / 55 lb (women)",
        description: "Keep your feet planted, squeeze your shoulder blades, and lower the bar under control.",
      },
      {
        name: "Bent Over Row (Barbell)",
        sets: "3x10",
        weight: "75 lb (men) / 45 lb (women)",
        description: "Hinge at hips, pull bar to lower chest, squeeze shoulder blades together.",
      },
      {
        name: "Overhead Press (Dumbbell)",
        sets: "3x10",
        weight: "20 lb (men) / 10 lb (women)",
        description: "Press dumbbells overhead, keep core tight and avoid arching your back.",
      },
    ],
  },
  {
    id: "intermediate-upper",
    name: "Intermediate Upper",
    type: "Upper Body",
    duration: "60m",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Incline Bench Press (Dumbbell)",
        sets: "4x8",
        weight: "50 lb (men) / 25 lb (women)",
        description: "Set bench to 30-45 degrees, press dumbbells up with palms facing forward.",
      },
      {
        name: "Pull-ups",
        sets: "4x6",
        weight: "Bodyweight",
        description: "Hang from bar, pull chin over bar, lower with control.",
      },
      {
        name: "Dips",
        sets: "3x10",
        weight: "Bodyweight",
        description: "Lower body until elbows at 90 degrees, push back up.",
      },
      {
        name: "Face Pulls (Cable)",
        sets: "3x15",
        weight: "40 lb",
        description: "Pull rope to face level, squeeze shoulder blades together.",
      },
    ],
  },
  {
    id: "advanced-upper",
    name: "Advanced Upper",
    type: "Upper Body",
    duration: "75m",
    difficulty: "Advanced",
    exercises: [
      {
        name: "Weighted Pull-ups",
        sets: "5x5",
        weight: "+45 lb",
        description: "Add weight with belt or vest, maintain strict form.",
      },
      {
        name: "Close-Grip Bench Press",
        sets: "4x6",
        weight: "185 lb (men) / 95 lb (women)",
        description: "Hands shoulder-width apart, elbows tucked, lower to chest.",
      },
      {
        name: "Barbell Rows",
        sets: "4x8",
        weight: "155 lb (men) / 85 lb (women)",
        description: "Pull bar to lower chest explosively, control the descent.",
      },
      {
        name: "Arnold Press",
        sets: "3x10",
        weight: "40 lb (men) / 20 lb (women)",
        description: "Rotate dumbbells as you press overhead, control the movement.",
      },
    ],
  },

  // LOWER BODY
  {
    id: "beginner-lower",
    name: "Beginner Lower",
    type: "Lower Body",
    duration: "45m",
    difficulty: "Beginner",
    exercises: [
      {
        name: "Goblet Squat",
        sets: "3x10",
        weight: "25 lb",
        description: "Hold dumbbell at chest, squat down keeping chest up and knees tracking over toes.",
      },
      {
        name: "Romanian Deadlift (Dumbbell)",
        sets: "3x10",
        weight: "30 lb (men) / 20 lb (women)",
        description: "Hinge at hips, lower dumbbells along legs, feel stretch in hamstrings.",
      },
      {
        name: "Leg Press",
        sets: "3x12",
        weight: "135 lb (men) / 90 lb (women)",
        description: "Feet shoulder-width, press through heels, don't lock knees.",
      },
    ],
  },
  {
    id: "intermediate-lower",
    name: "Intermediate Lower",
    type: "Lower Body",
    duration: "60m",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Back Squat (Barbell)",
        sets: "4x8",
        weight: "155 lb (men) / 95 lb (women)",
        description: "Bar on upper back, squat to parallel or below, drive through heels.",
      },
      {
        name: "Romanian Deadlift (Barbell)",
        sets: "4x8",
        weight: "135 lb (men) / 75 lb (women)",
        description: "Hinge at hips with slight knee bend, lower bar to mid-shin.",
      },
      {
        name: "Bulgarian Split Squat",
        sets: "3x10 each",
        weight: "30 lb (men) / 15 lb (women)",
        description: "Rear foot elevated, lunge down keeping front knee over ankle.",
      },
      {
        name: "Leg Curls",
        sets: "3x12",
        weight: "70 lb",
        description: "Curl heels to glutes, control the negative.",
      },
    ],
  },
  {
    id: "advanced-lower",
    name: "Advanced Lower",
    type: "Lower Body",
    duration: "75m",
    difficulty: "Advanced",
    exercises: [
      {
        name: "Front Squat",
        sets: "5x5",
        weight: "185 lb (men) / 115 lb (women)",
        description: "Bar on front shoulders, elbows high, squat deep maintaining upright torso.",
      },
      {
        name: "Deadlift (Conventional)",
        sets: "4x5",
        weight: "275 lb (men) / 155 lb (women)",
        description: "Feet hip-width, grip bar, drive through floor keeping back flat.",
      },
      {
        name: "Walking Lunges",
        sets: "4x12 each",
        weight: "50 lb (men) / 25 lb (women)",
        description: "Step forward, drop back knee to ground, alternate legs.",
      },
      {
        name: "Nordic Curls",
        sets: "3x8",
        weight: "Bodyweight",
        description: "Lower body forward with control, use hamstrings to return.",
      },
    ],
  },

  // CORE
  {
    id: "beginner-core",
    name: "Beginner Core",
    type: "Core",
    duration: "30m",
    difficulty: "Beginner",
    exercises: [
      {
        name: "Plank",
        sets: "3x30s",
        weight: "Bodyweight",
        description: "Forearms on ground, body straight from head to heels, engage core.",
      },
      {
        name: "Dead Bug",
        sets: "3x10 each",
        weight: "Bodyweight",
        description: "On back, opposite arm and leg extend, keep lower back pressed to floor.",
      },
      {
        name: "Russian Twists",
        sets: "3x20",
        weight: "10 lb",
        description: "Seated, lean back slightly, rotate torso side to side.",
      },
    ],
  },
  {
    id: "intermediate-core",
    name: "Intermediate Core",
    type: "Core",
    duration: "40m",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Hanging Leg Raises",
        sets: "3x12",
        weight: "Bodyweight",
        description: "Hang from bar, raise legs to 90 degrees, control descent.",
      },
      {
        name: "Ab Wheel Rollouts",
        sets: "3x10",
        weight: "Bodyweight",
        description: "Roll wheel forward keeping core tight, return to start.",
      },
      {
        name: "Pallof Press",
        sets: "3x12 each",
        weight: "40 lb",
        description: "Stand sideways to cable, press away resisting rotation.",
      },
      {
        name: "Mountain Climbers",
        sets: "3x30s",
        weight: "Bodyweight",
        description: "Plank position, drive knees to chest alternating quickly.",
      },
    ],
  },
  {
    id: "advanced-core",
    name: "Advanced Core",
    type: "Core",
    duration: "45m",
    difficulty: "Advanced",
    exercises: [
      {
        name: "Dragon Flags",
        sets: "4x6",
        weight: "Bodyweight",
        description: "Hold bench behind head, raise body keeping it straight, lower with control.",
      },
      {
        name: "Weighted Hanging Leg Raises",
        sets: "4x10",
        weight: "+10 lb (dumbbell between feet)",
        description: "Hang from bar with dumbbell, raise legs to bar level.",
      },
      {
        name: "L-Sit Hold",
        sets: "4x20s",
        weight: "Bodyweight",
        description: "Support body on parallettes or rings, hold legs at 90 degrees.",
      },
      {
        name: "Turkish Get-Ups",
        sets: "3x5 each",
        weight: "35 lb (men) / 20 lb (women)",
        description: "Lie down holding weight overhead, stand up while keeping arm vertical.",
      },
    ],
  },
];
