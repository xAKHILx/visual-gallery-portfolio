"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Lightbox from "./components/Lightbox";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark/light mode
  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  }, [isDarkMode]);

  // Fetch images from API
  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");
      if (!res.ok) throw new Error("Failed to fetch images");
      const { images } = await res.json();
      setImages(images);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]); // Clear images on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  }, []);

  // Set initial dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    document.documentElement.classList.toggle("dark", savedDarkMode);
  }, []);

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#252943] text-white" : "bg-[#DCD6F7] text-black"
      }`}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showAbout={showAbout}
        setShowAbout={setShowAbout}
      />

      {/* Main Gallery Content */}
      <div className="ml-64 flex-1 p-4 lg:p-8 overflow-y-auto">
        {isLoading ? (
          <div className="text-center text-2xl font-archivo animate-pulse">
            Loading artwork...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-2xl font-archivo">
            No artwork found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Artwork ${index}`}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <Lightbox
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}
