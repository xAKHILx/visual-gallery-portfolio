"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ selectedImage, setSelectedImage }) {
  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSelectedImage]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
      onClick={() => setSelectedImage(null)}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
        aria-label="Close lightbox"
      >
        &times;
      </button>
      <Image
        src={selectedImage}
        alt="Selected Artwork"
        width={900}
        height={900}
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
