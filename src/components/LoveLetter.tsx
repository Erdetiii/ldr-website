import { Heart, Mail } from "lucide-react";

export function LoveLetter() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-2xl overflow-hidden border-4 border-white">
        {/* Letter header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6" />
            <h3>A Letter to My Love</h3>
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>
        
        {/* Letter content */}
        <div className="p-10 space-y-6">
          <div className="text-right text-gray-600 mb-8">
            <p>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>My Dearest Love,</p>
            
            <p>
              From the very first moment I saw you, I felt a special connection. It was as if something suddenly fell into place, making my days brighter. Ever since then, you occupied my mind, no matter what was happening, no matter the time that had passed and no matter the distance.
            </p>

            <p>
              Being apart from you for as long as we were felt like something was missing again. An empty void crept into my heart. For the longest time I thought that something was wrong with me for feeling so empty, but it was because of the lack of you.
            </p>
            
            <p>
              Not a day goes by that I do not think of you. You are the first thing I think of when I wake up and the last thing I think of when I go to sleep. Words can never fully describe how much I love you, but I will still try.
            </p>
            
            <p>
              I love you as much as every grain of sand on all the beaches in the world. I love you as much as every drop of water across all the oceans. I love you as much as every star across the universe. And my love for you only grows. 
            </p>
            
            <p>
              People say long-distance relationships are hard, and they're not wrong. But what they don't understand is how distance has made us stronger. It has taught us patience, deepened our communication, and made every moment we share, even the virtual ones, incredibly precious. 
            </p>

            <p>
              Thank you for choosing me. Thank you for your patience, your love, and your commitment to us. You make every day brighter, every challenge easier, and every dream worth pursuing.
            </p>
            
            <p className="mt-8">
              Forever yours, across any distance,
            </p>
            
            <div className="flex items-center gap-2 text-rose-600 mt-4">
              <Heart className="w-5 h-5 fill-current" />
              <p className="italic">With all my love</p>
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
        
        {/* Letter footer decoration */}
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 border-t-2 border-rose-200">
          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <Heart key={i} className="w-4 h-4 text-rose-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
