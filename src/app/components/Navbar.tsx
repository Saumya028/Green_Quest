'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu, Award, Settings, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get session data from next-auth
  const { data: session } = useSession();
  
  // Mock points and trees data - replace with actual data from your database
  const userData = {
    name: session?.user?.name || 'Guest',
    email: session?.user?.email || '',
    points: 1250,
    treesPlanted: 15,
    level: 'Green Guardian',
    image: session?.user?.image
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
              GREENQUEST
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
              Contacts
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-300" />
            </Link>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              {session ? (
                <>
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {userData.image ? (
                      <img src={userData.image} alt="Profile" className="w-6 h-6 rounded-full" />
                    ) : (
                      <User className="w-6 h-6 text-gray-300" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-gray-900 border-2 border-green-500 rounded-lg shadow-xl overflow-hidden">
                      {/* User Info Header */}
                      <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 p-4 border-b border-green-500/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl overflow-hidden">
                            {userData.image ? (
                              <img src={userData.image} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                              '👤'
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-white">{userData.name}</h3>
                            <p className="text-sm text-gray-400">{userData.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">
                            {userData.level}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="p-4 bg-gray-800/50 border-b border-gray-700">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <Award className="w-4 h-4 text-yellow-400" />
                              <span className="text-2xl font-bold text-green-400">{userData.points}</span>
                            </div>
                            <p className="text-xs text-gray-400">Green Points</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <span className="text-2xl">🌳</span>
                              <span className="text-2xl font-bold text-green-400">{userData.treesPlanted}</span>
                            </div>
                            <p className="text-xs text-gray-400">Trees Planted</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link 
                          href="/dashboard"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-gray-300 hover:text-green-400"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="w-5 h-5" />
                          <span>My Dashboard</span>
                        </Link>
                        <Link 
                          href="/settings"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-gray-300 hover:text-green-400"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="w-5 h-5" />
                          <span>Settings</span>
                        </Link>
                        <button 
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-gray-300 hover:text-red-400 w-full"
                          onClick={async () => {
                            setIsProfileOpen(false);
                            await signOut();
                            router.push('/');
                          }}
                        >
                          <LogOut className="w-5 h-5" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href="/login" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded transition-colors">
                  Login
                </Link>
              )}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/30">
            <div className="flex flex-col space-y-4">
              <Link href="/home" className="text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                Contacts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}