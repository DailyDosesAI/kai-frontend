"use client";

import Link from "next/link";

export default function LifeStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nav-bar to-white flex flex-col">
      {/* Header */}
      <header className="bg-nav-bar py-4 sm:py-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-10">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Kai Language Lab</h1>
          <Link href="/" className="bg-blue text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base cursor-pointer hover:bg-blue/90 transition-colors">
            <h2>← Back to Home</h2>
          </Link>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px] sm:h-[72px]" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
            {/* Main Feature Card */}
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-xl max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-black mb-4">Your Learning Journey Awaits</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              Discover your personalized language learning experience with detailed progress tracking, 
              milestone celebrations, and meaningful conversation memories.
            </p>
            
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full px-8 py-4 text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
              Start Your Story
            </button>
            </div>

          {/* Privacy Policy Link */}
          <div className="mt-6">
            <Link href="/LifeStory/privacy" className="text-blue-600 hover:text-blue-800 underline text-sm transition-colors">
              LifeStory Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-gray text-sm">© 2024 Kai Language Lab. Your personal AI tutor.</p>
      </footer>
    </div>
  );
}
