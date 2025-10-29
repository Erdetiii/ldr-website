import { Heart, MapPin, Calendar } from "lucide-react";

interface Milestone {
  title: string;
  date: string;
  location: string;
  icon?: "heart" | "calendar";
}

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 via-pink-400 to-purple-400" />
      
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-rose-900 mb-2">{milestone.title}</h3>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  <span>{milestone.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{milestone.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
