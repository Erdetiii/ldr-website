import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Photo {
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group aspect-square"
        >
          <ImageWithFallback
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
