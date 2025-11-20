'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { plants, categories } from '../data/plants';
import { Truck, Headphones, Sprout } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const bestSelling = plants.slice(0, 6);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  // Show loading while checking auth
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🌱</div>
          <p className="text-white text-xl">Loading GreenQuest...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Best Selling Trees Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Best Selling Trees</h2>
            <p className="text-gray-400 max-w-3xl">
              Choose the plants you love, and we'll plant them in nature on your behalf. Every tree you grow 
              brings you closer to a healthier, happier life while giving the Earth a little more love and greenery. 
              With each seed you nurture, you're creating a ripple of positive change—one small choice that 
              makes a big impact on the planet and yourself.
            </p>
          </div>
          {/* Pixel Art Plants */}
          <div className="hidden lg:flex space-x-2">
            <div className="text-5xl">🌱</div>
            <div className="text-5xl">🪴</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bestSelling.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <Link href="/products">
            <button className="btn-secondary">
              See more →
            </button>
          </Link>
        </div>
      </section>

      {/* Eco Fairy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Eco Fairy ✨</h2>
        
        <div className="retro-card p-8 bg-gradient-to-b from-green-900/30 to-gray-900/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-repeat" 
               style={{ backgroundImage: "url('/patterns/leaves.png')", imageRendering: 'pixelated' }}></div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Pixel Fairy Character */}
            <div className="flex-shrink-0 w-48 h-48 flex items-center justify-center">
              <div className="text-9xl">🧚</div>
            </div>

            {/* Speech Bubble */}
            <div className="flex-1 retro-card p-6 bg-white text-black">
              <p className="text-lg leading-relaxed">
                🌱 "Hello, Friend! I'm Sprout, your tiny guide to a greener world. Ready to plant 
                your first seed and start your adventure?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
          About Us 🌿
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          At Green Quest, we make it easy to bring greenery into your life while giving back to the planet. 
          Choose from our large assortment of trees, home plants, seeds, fertilizers, and accessories—there's 
          something for every plant lover!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Assortment */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-900/30 rounded-full flex items-center justify-center retro-card">
              <Sprout className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Large Assortment 🌱</h3>
            <p className="text-gray-400">
              Explore a wide variety of trees, home plants, seeds, fertilizers, and accessories—there's 
              something for every plant lover!
            </p>
          </div>

          {/* Fast & Free Shipping */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-900/30 rounded-full flex items-center justify-center retro-card">
              <Truck className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast & Free Shipping 📦</h3>
            <p className="text-gray-400">
              We make sure your plants and gardening essentials reach you quickly and safely, at no extra cost.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-900/30 rounded-full flex items-center justify-center retro-card">
              <Headphones className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support 📞</h3>
            <p className="text-gray-400">
              Our team is always ready to help you with guidance, tips, or any questions about your plant's 
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Categories</h2>
        <p className="text-center text-gray-400 mb-12">Find what you are looking for</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="retro-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
              <div className="relative h-48 bg-gradient-to-b from-green-800/30 to-gray-900 flex items-center justify-center text-7xl">
                {category.id === 'forest-trees' && '🌳'}
                {category.id === 'home-plants' && '🪴'}
                {category.id === 'fertilizers' && '🌱'}
                {category.id === 'accessories' && '✨'}
                {category.id === 'diy-kits' && '🎨'}
                {category.id === 'gifts' && '🎁'}
              </div>
              <div className="p-6 bg-gray-900/80">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">What customers say about<br />GreenQuest?</h2>

        <div className="space-y-8">
          {/* Testimonial 1 */}
          <div className="retro-card p-8 bg-gradient-to-b from-green-900/20 to-gray-900/50 relative">
            <div className="absolute top-4 right-4 text-2xl">💬</div>
            <p className="text-green-400 text-sm mb-4">
              🌱 "Every feedback is a little seed that makes GreenQuest bloom brighter."
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I absolutely love GreenQuest! Planting trees for the environment has never been easier or more 
              rewarding. I planted my first Neem tree in a nearby forest, and the app keeps me updated on its 
              growth—it feels amazing to see the real impact I'm making. The gamified experience with the plant 
              avatars makes every step fun and engaging. I genuinely feel like I'm contributing to a greener 
              planet while enjoying a playful adventure!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-sm text-gray-400">Youtuber</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="retro-card p-8 bg-gradient-to-b from-green-900/20 to-gray-900/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              GreenQuest has completely changed how I care for plants at home. The home plants I ordered arrived 
              healthy and beautifully packaged, and the step-by-step guidance from the app's plant avatars made 
              it so easy to nurture them. I love checking in on my virtual forest and seeing the progress of 
              each tree—it's a perfect mix of fun, learning, and doing something good for the planet!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="font-bold">Sarah Jacob</p>
                <p className="text-sm text-gray-400">Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pixel Fairy Character */}
        <div className="flex justify-end mt-12">
          <div className="text-8xl">🧚‍♀️</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}