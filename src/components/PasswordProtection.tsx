import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// ⚠️ PASSWORD CONFIGURATION ⚠️
// Change the password here if needed:
const CORRECT_PASSWORD = "pallaqinkamekeqap";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
      // Shake animation trigger
      setTimeout(() => setError(false), 500);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Blurred Background Content */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-xl scale-105 pointer-events-none select-none">
          {children}
        </div>
      </div>

      {/* Password Overlay */}
      <div className="relative z-50 min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-900/40 via-pink-900/40 to-purple-900/40 backdrop-blur-sm">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-rose-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-rose-900 mb-2">Private Love Story</h2>
              <p className="text-gray-600">
                Enter the password to unlock our special website
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`text-center transition-all ${
                    error 
                      ? "border-red-500 animate-shake" 
                      : "border-gray-300 focus:border-rose-500"
                  }`}
                  autoFocus
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    Incorrect password. Try again!
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                Unlock Our Story
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-rose-400">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm">Made with love</span>
                <Heart className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
