import { MapPin } from "lucide-react";

export function DistanceMap() {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <h3 className="text-center mb-6 text-rose-900">Across the Miles</h3>
      
      <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden">
        {/* Simple map representation */}
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Background */}
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#cbd5e1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#dots)" />
          
          {/* Connection line */}
          <line
            x1="250"
            y1="150"
            x2="550"
            y2="200"
            stroke="#f43f5e"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.6"
          />
          
          {/* Netherlands marker */}
          <g transform="translate(250, 150)">
            <circle cx="0" cy="0" r="30" fill="#f43f5e" opacity="0.2" />
            <circle cx="0" cy="0" r="15" fill="#f43f5e" />
            <path
              d="M-6,-8 L6,-8 L0,8 Z"
              fill="white"
            />
          </g>
          
          {/* Kosovo marker */}
          <g transform="translate(550, 200)">
            <circle cx="0" cy="0" r="30" fill="#f43f5e" opacity="0.2" />
            <circle cx="0" cy="0" r="15" fill="#f43f5e" />
            <path
              d="M-6,-8 L6,-8 L0,8 Z"
              fill="white"
            />
          </g>
          
          {/* Labels */}
          <text x="250" y="195" textAnchor="middle" className="fill-gray-700">Netherlands</text>
          <text x="550" y="245" textAnchor="middle" className="fill-gray-700">Kosovo</text>
          
          {/* Distance */}
          <text x="400" y="165" textAnchor="middle" className="fill-rose-600">
            <tspan className="text-sm">~2,200 km</tspan>
          </text>
        </svg>
        
        {/* Decorative hearts */}
        <div className="absolute top-4 right-4 flex gap-2">
          <MapPin className="w-5 h-5 text-rose-500" />
        </div>
      </div>
      
      <div className="mt-6 text-center text-gray-600">
        <p>Connected by love, no matter the distance</p>
      </div>
    </div>
  );
}
