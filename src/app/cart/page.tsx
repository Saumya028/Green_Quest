'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      price: 199.00,
      quantity: 1,
      image: '/plants/neem.jpg'
    },
    {
      id: '5',
      name: 'Mango',
      scientificName: 'Mangifera indica',
      price: 449.00,
      quantity: 2,
      image: '/plants/mango.jpg'
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Shopping Cart 🛒</h1>
          <p className="text-gray-400">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="retro-card p-12 text-center bg-gray-900/50">
            <div className="text-8xl mb-6">🌱</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">
              Start planting! Browse our collection and add some green to your life.
            </p>
            <Link href="/products">
              <button className="btn-primary">
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="retro-card p-6 bg-gray-900/50">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-b from-green-900/30 to-gray-900 rounded flex items-center justify-center flex-shrink-0">
                      <div className="text-5xl">🌳</div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{item.scientificName}</p>
                      
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-400">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-400">
                            ₹{item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 bg-red-900/30 hover:bg-red-900/50 rounded transition-colors ml-4"
                        >
                          <Trash2 className="w-5 h-5 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="retro-card p-6 bg-gray-900/50 sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-green-400">
                      🎉 You've qualified for free shipping!
                    </p>
                  )}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-green-400">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="btn-primary w-full mb-4">
                  Proceed to Checkout
                </button>
                
                <Link href="/products">
                  <button className="btn-secondary w-full">
                    Continue Shopping
                  </button>
                </Link>

                {/* Sprout Message */}
                <div className="mt-6 retro-card p-4 bg-gradient-to-b from-green-900/30 to-gray-900/30">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🧚</div>
                    <p className="text-sm text-gray-300">
                      "Great choices! Each plant brings you closer to a greener world! 🌱"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {cartItems.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="retro-card p-6 bg-gray-900/30 text-center">
              <div className="text-4xl mb-3">🌳</div>
              <h3 className="font-bold mb-2">Real Impact</h3>
              <p className="text-sm text-gray-400">
                Your trees will be planted in verified locations
              </p>
            </div>

            <div className="retro-card p-6 bg-gray-900/30 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Track Growth</h3>
              <p className="text-sm text-gray-400">
                Get updates and photos of your trees growing
              </p>
            </div>

            <div className="retro-card p-6 bg-gray-900/30 text-center">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold mb-2">Gamified Experience</h3>
              <p className="text-sm text-gray-400">
                Enjoy plant avatars and earn rewards
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}