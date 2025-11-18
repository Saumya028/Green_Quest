import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-green-500/30">
      {/* Pixel Art Character */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-32 h-32 bg-contain bg-no-repeat" 
           style={{ backgroundImage: "url('/sprites/sprout-fairy.png')" }}>
        {/* Fallback fairy emoji */}
        <div className="w-full h-full flex items-center justify-center text-6xl">
          🧚
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="flex justify-center pt-24 pb-8">
        <div className="retro-card px-6 py-4 max-w-md text-center bg-white text-black">
          <p className="text-sm md:text-base">
            🌱 "Goodbye! Your trees will be waiting for you!" 🌳
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GREENQUEST</h3>
            <p className="text-gray-400 text-sm mb-4">
              We help you find your dream plant
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
              <li><Link href="/products" className="hover:text-green-400 transition-colors">Product</Link></li>
              <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/community" className="hover:text-green-400 transition-colors">Community</Link></li>
              <li><Link href="/career" className="hover:text-green-400 transition-colors">Career</Link></li>
              <li><Link href="/story" className="hover:text-green-400 transition-colors">Our story</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/getting-started" className="hover:text-green-400 transition-colors">Getting Started</Link></li>
              <li><Link href="/pricing" className="hover:text-green-400 transition-colors">Pricing</Link></li>
              <li><Link href="/resources" className="hover:text-green-400 transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2024 GreenQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}