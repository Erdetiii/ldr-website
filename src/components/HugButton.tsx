import { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export function HugButton() {
  const [isHugging, setIsHugging] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleHug = () => {
    setIsHugging(true);
    
    // Generate multiple hearts
    const newHearts = Array.from({ length: 12 }, (_, i) => i);
    setHearts(newHearts);

    setTimeout(() => {
      setIsHugging(false);
      setHearts([]);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <Button
        onClick={handleHug}
        disabled={isHugging}
        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
      >
        <motion.span
          animate={isHugging ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, repeat: isHugging ? 3 : 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl">🤗</span>
          <span>{isHugging ? "Hugging..." : "Send a Hug"}</span>
        </motion.span>
      </Button>

      {/* Animated hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0
          }}
          animate={{
            x: (Math.random() - 0.5) * 200,
            y: -100 - Math.random() * 100,
            opacity: 0,
            scale: 1
          }}
          transition={{
            duration: 1.5,
            delay: heart * 0.1,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 pointer-events-none"
        >
          <Heart className="w-6 h-6 text-rose-500 fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
