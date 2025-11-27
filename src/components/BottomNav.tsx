import { Home, Search, Plus, Book, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Feed", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Plus, label: "Workout", path: "/workout" },
    { icon: Book, label: "Logbook", path: "/logbook" },
    { icon: User, label: "Account", path: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-strong z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isWorkout = item.path === "/workout";
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center transition-smooth ${
                isWorkout ? "relative -top-4" : ""
              }`}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`flex items-center justify-center rounded-full transition-smooth ${
                      isWorkout
                        ? "w-14 h-14 gradient-primary shadow-glow"
                        : `w-10 h-10 ${isActive ? "bg-primary/10" : ""}`
                    }`}
                  >
                    <Icon
                      className={`transition-smooth ${
                        isWorkout
                          ? "w-6 h-6 text-white"
                          : isActive
                          ? "w-5 h-5 text-primary"
                          : "w-5 h-5 text-muted-foreground"
                      }`}
                    />
                  </div>
                  {!isWorkout && (
                    <span
                      className={`text-xs mt-1 transition-smooth ${
                        isActive ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
