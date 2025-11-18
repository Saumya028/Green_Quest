import { Plant } from '../data/plants';
import Image from 'next/image';

interface ProductCardProps {
  plant: Plant;
}

export default function ProductCard({ plant }: ProductCardProps) {
  return (
    <div className="retro-card overflow-hidden group hover:scale-105 transition-transform duration-300">
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-b from-green-900/20 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-8xl">
          {plant.category === 'Forest Trees' && '🌳'}
          {plant.category === 'Fruit Trees' && '🌴'}
          {plant.category === 'Flowering Trees' && '🌺'}
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-cover"
        /> */}
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-900/80">
        <h3 className="text-lg font-bold text-white mb-1">
          {plant.name}
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          {plant.scientificName}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-400">
            ₹{plant.price.toFixed(2)}
          </span>
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}