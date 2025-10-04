import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    '/stuu-110.JPG',
    '/stuu-720.JPG',
    '/stuu-699.JPG',
    '/stuu-684.JPG',
    '/stuu-678.JPG',
    '/stuu-675.JPG',
    '/stuu-668.JPG',
    '/stuu-657.JPG',
    '/stuu-525.JPG',
    '/stuu-519.JPG',
    '/stuu-144.JPG',
    '/stuu-107.JPG',
    '/stuu-84.JPG',
    '/stuu-25.JPG',
    '/stuu-34.JPG',
    '/stuu-68.JPG',
    '/stuu-297.JPG',
    '/stuu-229.JPG',
    '/stuu-199.JPG',
    '/stuu-189.JPG'
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the moments, passion, and brotherhood captured on and off the field
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors duration-200 p-2"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-green-400 transition-colors duration-200 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Image */}
            <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-green-400 transition-colors duration-200 p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
