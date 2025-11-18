'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
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
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <User className="w-6 h-6 text-gray-300" />
            </button>
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
              <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
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