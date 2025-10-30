import { Heart, MapPin, Calendar } from "lucide-react";
import { QuoteCard } from "./components/QuoteCard";
import { PhotoGallery } from "./components/PhotoGallery";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { CountdownTimer } from "./components/CountdownTimer";
import { Timeline } from "./components/Timeline";
import { LoveLetter } from "./components/LoveLetter";
import { OurSong } from "./components/OurSong";
import { HugButton } from "./components/HugButton";
import { DistanceMap } from "./components/DistanceMap";
import { PasswordProtection } from "./components/PasswordProtection";

export default function App() {
  const milestones = [
    {
      title: "First Date",
      date: "2nd of May 2025",
      location: "Papirun, Prishtinë"
    },
    {
      title: "First Kiss",
      date: "17th of July 2025",
      location: "Parku i Dardanisë, Prishtinë"
    },
    {
      title: "First 'I Love You'",
      date: "19th of July 2025",
      location: "Rrugës duke u kthyer nga Peja"
    }
  ];
  const quotes = [
    {
      quote: "Distance means so little when someone means so much.",
      author: "Unknown"
    },
    {
      quote: "I carry your heart with me. I carry it in my heart.",
      author: "E.E. Cummings"
    },
    {
      quote: "The pain of parting is nothing compared to the joy of meeting again.",
      author: "Charles Dickens"
    },
    {
      quote: "Distance is just a test to see how far love can travel.",
      author: "Unknown"
    },
    {
      quote: "True love doesn't mean being inseparable; it means being separated and nothing changes.",
      author: "Unknown"
    },
    {
      quote: "I exist in two places, here and where you are.",
      author: "Margaret Atwood"
    }
  ];

  const photos = [
    {
      url: "/IMG_2664.jpeg",
      alt: "Couple holding hands"
    },
    {
      url: "/IMG_2968.JPG",
      alt: "Sunset romance"
    },
    {
      url: "/IMG_2716.jpeg",
      alt: "Romantic couple"
    },
    {
      url: "/IMG_2998.jpeg",
      alt: "Love letters"
    },
    {
      url: "/IMG_3042.JPG",
      alt: "Stars in the distance"
    },
    {
      url: "../public/IMG_2999.JPG",
      alt: "Couple embrace"
    }
  ];

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYxNjk4NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-rose-50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse text-rose-400" />
          <h1 className="mb-6">Distance is Temporary, Love is Forever</h1>
          <p className="text-xl opacity-90 mb-8">
            A collection of moments, memories, and words that keep us close
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span>Miles Apart</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" />
              <span>Hearts Together</span>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-sm mb-4 opacity-90">Counting down to our next meeting</p>
            <CountdownTimer />
          </div>
          
          {/* Hug Button */}
          <HugButton />
        </div>
      </header>

      {/* Our Song Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <OurSong />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-rose-900">Our Journey Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every milestone marks a special moment in our love story
            </p>
          </div>
          
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-rose-900">Words That Keep Us Close</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every quote reminds me of us and the strength of our love across the miles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote.quote} author={quote.author} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-rose-900">Our Love Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pictures that capture the beauty of love that transcends distance
            </p>
          </div>
          
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-20 px-4">
        <LoveLetter />
      </section>

      {/* Distance Map Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <DistanceMap />
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-12 shadow-xl">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6" />
            <h3 className="mb-4 text-rose-900">Until We're Together Again</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every sunrise brings us one day closer. Every sunset reminds me of your warmth. 
              Though miles separate us, our hearts beat as one. You are my first thought in the 
              morning and my last wish at night. Distance is just a test, and we're passing it 
              with flying colors because what we have is worth the wait.
            </p>
            <div className="inline-block">
              <div className="flex items-center gap-2 text-rose-600">
                <Heart className="w-5 h-5 fill-current" />
                <span>Forever yours</span>
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
        <p>Made with love, across the miles ❤️</p>
      </footer>
    </div>
    </PasswordProtection>
  );
}
