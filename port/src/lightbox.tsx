import { X } from "lucide-react";

interface LightboxProps {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center lightbox">
      <div className="relative max-w-4xl max-h-full p-4">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
