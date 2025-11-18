'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { plants } from '../data/plants';
import { Filter } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const categories = ['all', 'Forest Trees', 'Fruit Trees', 'Flowering Trees'];

  const filteredPlants = plants.filter(plant => {
    const categoryMatch = selectedCategory === 'all' || plant.category === selectedCategory;
    const priceMatch = plant.price >= priceRange[0] && plant.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Products 🌳</h1>
          <p className="text-gray-400 max-w-3xl">
            Explore our complete collection of trees, plants, and gardening essentials. 
            Every purchase brings you closer to a greener future!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="retro-card p-6 bg-gray-900/50 sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-sm text-gray-400">CATEGORY</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-500 text-black font-bold'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      }`}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-3 text-sm text-gray-400">PRICE RANGE</h3>
                <div className="space-y-3">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full accent-green-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setPriceRange([0, 1000])}
                    className="text-sm text-green-400 hover:text-green-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-400">
                Showing <span className="text-white font-bold">{filteredPlants.length}</span> products
              </p>
            </div>

            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            ) : (
              <div className="retro-card p-12 text-center bg-gray-900/50">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2">No plants found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}