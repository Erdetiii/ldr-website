import { Heart } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author?: string;
}

export function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
      <Heart className="w-8 h-8 text-rose-500 mb-4 mx-auto" />
      <blockquote className="text-center">
        <p className="text-gray-700 mb-4 italic">"{quote}"</p>
        {author && <footer className="text-gray-500">— {author}</footer>}
      </blockquote>
    </div>
  );
}
