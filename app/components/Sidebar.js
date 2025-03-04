"use client";
import {
  SunIcon,
  MoonIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar({
  isDarkMode,
  toggleDarkMode,
  showAbout,
  setShowAbout,
}) {
  return (
    <div
      className={`w-64 sm:w-56 md:w-64 h-screen ${
        isDarkMode ? "bg-[#252943] text-white" : "bg-[#DCD6F7] text-black"
      } p-6 fixed flex flex-col justify-between items-center text-center transition-all duration-300 ease-in-out overflow-y-auto`}
    >
      {/* Main Content */}
      <div className="w-full flex flex-col items-center">
        {/* Profile Section */}
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden">
          <img
            src="./logo/profile-placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold tracking-wider transform hover:scale-105 transition-transform mb-2">
          {"Luna Veyra".toUpperCase()}
        </h1>
        <div className="text-center text-[#5953BE] cursor-pointer font-archivo text-lg sm:text-base md:text-lg mb-6 opacity-75 hover:opacity-100 transition-opacity">
          {"@LunaVeyraart".toLowerCase()}
        </div>

        <nav className="w-full space-y-6">
          {/* About Section */}
          <div className="space-y-2">
            <button
              onClick={() => setShowAbout(!showAbout)}
              className={`relative flex items-center justify-center p-3 rounded-lg ${
                isDarkMode
                  ? "bg-[#5953BE] hover:bg-[#736CED]"
                  : "bg-[#736CED] hover:bg-[#5953BE]"
              } w-full font-archivo text-sm uppercase text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              <span>About</span>
              <span className="absolute right-3">
                {showAbout ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </span>
            </button>
            {showAbout && (
              <div
                className={`px-4 py-3 rounded-lg ${
                  isDarkMode ? "bg-[#2f335a] text-white" : "bg-white text-black"
                } transition-all duration-500 ease-in-out shadow-md`}
              >
                <h2 className="text-lg sm:text-base md:text-lg font-bold mb-2 uppercase tracking-wider">
                  Art that speaks louder than words.
                </h2>
                <p className="text-sm leading-relaxed text-justify opacity-90">
                  A visual language of emotion, where every stroke and hue tells
                  a story beyond words. These pieces are an invitation to feel,
                  explore, and connect with the unspoken ✨
                </p>
              </div>
            )}
          </div>

          {/* Social Media Links */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider opacity-60 mb-3">
              Connect With Me
            </h3>
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-green-600 hover:bg-green-500 w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Fiverr
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-[#EA4C89] hover:bg-[#F082AC] w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Dribbble
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-[#1769FF] hover:bg-[#0057FF] w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Behance
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Facebook
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2.5 rounded-lg ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              } hover:opacity-90 w-full font-archivo text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              X
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-auto pt-6">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className={`p-3 w-full rounded-lg flex items-center justify-center transition-all duration-300 mb-4 ${
            isDarkMode
              ? "bg-[#2f335a] hover:bg-[#363a66]"
              : "bg-white hover:bg-gray-100"
          } shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-white" />
          ) : (
            <MoonIcon className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Footer */}
        <footer className="w-full text-center py-4 text-gray-400 text-xs font-archivo uppercase tracking-wide border-t border-gray-700">
          &copy; {new Date().getFullYear()} {"@LunaVeyra".toLocaleLowerCase()}.
          All rights reserved.
        </footer>
      </div>
    </div>
  );
}
