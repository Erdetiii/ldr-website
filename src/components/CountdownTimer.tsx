import { useState, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface CountdownTimerProps {
  initialDate?: Date;
}

export function CountdownTimer({ initialDate }: CountdownTimerProps) {
  const [targetDate, setTargetDate] = useState<Date | undefined>(initialDate);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {targetDate ? targetDate.toLocaleDateString() : "Set Date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={targetDate}
            onSelect={setTargetDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {targetDate && (
        <div className="flex gap-4">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
              <div className="text-3xl">{timeLeft.days}</div>
              <div className="text-xs opacity-80">Days</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
              <div className="text-3xl">{timeLeft.hours}</div>
              <div className="text-xs opacity-80">Hours</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
              <div className="text-3xl">{timeLeft.minutes}</div>
              <div className="text-xs opacity-80">Min</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
              <div className="text-3xl">{timeLeft.seconds}</div>
              <div className="text-xs opacity-80">Sec</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
