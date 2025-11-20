'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      {/* Pixel Art Background */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: "url('/backgrounds/forest-pixel.png')",
          imageRendering: 'pixelated'
        }}
      >
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-teal-900/50 to-black"></div>
      </div>

      {/* Floating Pixel Characters */}
      <div className="absolute top-24 left-8 w-16 h-16 animate-bounce" style={{ animationDelay: '0s' }}>
        <div className="text-4xl">🌱</div>
      </div>
      <div className="absolute top-32 right-12 w-20 h-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="text-5xl">🧚</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pixel Cactus with Hearts */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="text-6xl">🌵</div>
            <div className="absolute -top-2 -left-2 text-2xl animate-pulse">💚</div>
            <div className="absolute -top-2 -right-2 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>💚</div>
          </div>
        </div>

        {/* Main Quote */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white pixel-text">
          "Every plant you choose<br />
          adds life back to Earth."
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <div className="retro-card p-6 bg-white/90">
            <div className="text-3xl md:text-4xl font-bold text-black">10+</div>
            <div className="text-sm md:text-base text-black">Plant Species</div>
          </div>
          <div className="retro-card p-6 bg-white/90">
            <div className="text-3xl md:text-4xl font-bold text-black">100+</div>
            <div className="text-sm md:text-base text-black">Customers</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="retro-card p-2 bg-white max-w-2xl mx-auto mb-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="p-3 bg-green-500 rounded hover:bg-green-600 transition-colors">
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Welcome Message Box */}
        <div className="retro-card p-4 bg-white max-w-xs mx-auto">
          <p className="text-sm font-bold text-black">
            Hey Mate!<br />
            Welcome to<br />
            GreenQuest!
          </p>
        </div>
      </div>

      {/* Pixel Art Fairy Character (Bottom Right) */}
      <div className="absolute bottom-12 right-8 w-32 h-32 hidden lg:block">
        <div className="text-7xl">🧚‍♀️</div>
      </div>
    </section>
  );
}