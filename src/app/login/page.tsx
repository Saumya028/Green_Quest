'use client';

import { useState } from 'react';
import Link from 'next/link';
import SignIn from '@/app/components/auth/sign-in';
import SignUp from '@/app/components/auth/sign-up';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Pixel Art Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/backgrounds/forest-pixel.png')",
          imageRendering: 'pixelated'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-teal-900/50 to-black"></div>
      </div>

      {/* Floating Pixel Characters */}
      <div className="absolute top-12 left-8 w-20 h-20 animate-bounce hidden md:block" style={{ animationDelay: '0s' }}>
        <div className="text-5xl">🌱</div>
      </div>
      <div className="absolute top-24 right-12 w-24 h-24 animate-bounce hidden md:block" style={{ animationDelay: '1s' }}>
        <div className="text-6xl">🧚</div>
      </div>
      <div className="absolute bottom-12 left-12 w-20 h-20 animate-bounce hidden md:block" style={{ animationDelay: '0.5s' }}>
        <div className="text-5xl">🌳</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            GREENQUEST
          </h1>
        </Link>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-3 px-4 font-bold rounded-t-lg transition-all ${
              activeTab === 'signin'
                ? 'bg-white text-black border-2 border-green-500 border-b-0'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 px-4 font-bold rounded-t-lg transition-all ${
              activeTab === 'signup'
                ? 'bg-white text-black border-2 border-green-500 border-b-0'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Auth Forms */}
        <div className="bg-white rounded-lg rounded-tl-none border-2 border-green-500 shadow-lg">
          {activeTab === 'signin' ? <SignIn /> : <SignUp />}
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Bottom Right Fairy */}
      <div className="absolute bottom-8 right-8 w-32 h-32 hidden lg:block">
        <div className="text-8xl">🧚‍♀️</div>
      </div>
    </div>
  );
}