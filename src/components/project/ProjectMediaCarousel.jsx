"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectMediaCarousel({ video, images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Combine video and images into media array
  const media = [];
  if (video) {
    media.push({ type: "video", src: video });
  }
  if (images && images.length > 0) {
    images.forEach((img) => {
      media.push({ type: "image", src: img });
    });
  }

  const totalSlides = media.length;

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (totalSlides === 0) return null;

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-[280px] md:h-[400px] rounded-xl overflow-hidden bg-gray-100">
        {/* Media Content */}
        {media[currentIndex].type === "video" ? (
          <video
            key={currentIndex}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            onPlay={() => setIsAutoPlaying(false)}
          >
            <source src={media[currentIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={media[currentIndex].src}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        )}

        {/* Navigation Arrows - Only show if more than 1 slide */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Media Type Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full z-10">
          {media[currentIndex].type === "video"
            ? "Video"
            : `${currentIndex + 1}/${totalSlides}`}
        </div>
      </div>

      {/* Thumbnail Navigation - Optional */}
      {totalSlides > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-gray-900 scale-105"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-xs">Video</span>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
