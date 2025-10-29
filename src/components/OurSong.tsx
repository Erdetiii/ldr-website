import { Music, Heart } from "lucide-react";

export function OurSong() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 shadow-lg">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 shadow-lg">
          <Music className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="mb-2 text-purple-900">Our Song</h3>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <p className="text-xl text-gray-800 mb-2">"Die With A Smile"</p>
            <p className="text-gray-600 mb-4">Bruno Mars & Lady Gaga</p>
            
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-sm text-gray-500 mt-4 italic">
              "If the world was ending, I'd wanna be next to you..."
            </p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-6">
          <Heart className="w-5 h-5 text-pink-500 fill-current animate-pulse" />
          <p className="text-gray-600">The song that reminds us of each other</p>
          <Heart className="w-5 h-5 text-pink-500 fill-current animate-pulse" />
        </div>
      </div>
    </div>
  );
}
