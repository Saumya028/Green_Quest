'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon. 🌱');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Get in Touch 📧</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our plants? Want to learn more about our mission? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="retro-card p-8 bg-gray-900/50">
            <h2 className="text-2xl font-bold mb-6">Send us a Message 🌱</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:border-green-500 focus:outline-none text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:border-green-500 focus:outline-none text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:border-green-500 focus:outline-none text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:border-green-500 focus:outline-none text-white resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="retro-card p-6 bg-gray-900/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm">contact@greenquest.com</p>
                  <p className="text-gray-400 text-sm">support@greenquest.com</p>
                </div>
              </div>
            </div>

            <div className="retro-card p-6 bg-gray-900/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400 text-sm">+91 1234567890</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>
            </div>

            <div className="retro-card p-6 bg-gray-900/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400 text-sm">
                    123 Green Street<br />
                    Mumbai, Maharashtra<br />
                    India - 400001
                  </p>
                </div>
              </div>
            </div>

            {/* Sprout Character */}
            <div className="retro-card p-6 bg-gradient-to-b from-green-900/30 to-gray-900/30">
              <div className="flex items-center gap-4">
                <div className="text-6xl">🧚</div>
                <div className="flex-1 retro-card p-4 bg-white text-black text-sm">
                  <p>
                    "Need help? I'm always here! Drop us a message and let's grow together! 🌱"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions 🤔</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="retro-card p-6 bg-gray-900/50">
              <h3 className="font-bold mb-2 text-green-400">How does tree planting work?</h3>
              <p className="text-gray-400 text-sm">
                When you purchase a tree, we plant it in a verified forest or green area. 
                You'll receive updates and can track its growth through our app!
              </p>
            </div>

            <div className="retro-card p-6 bg-gray-900/50">
              <h3 className="font-bold mb-2 text-green-400">Do you ship nationwide?</h3>
              <p className="text-gray-400 text-sm">
                Yes! We offer free shipping across India for all our plants and products. 
                Delivery typically takes 5-7 business days.
              </p>
            </div>

            <div className="retro-card p-6 bg-gray-900/50">
              <h3 className="font-bold mb-2 text-green-400">What if my plant arrives damaged?</h3>
              <p className="text-gray-400 text-sm">
                We take great care in packaging, but if your plant arrives damaged, 
                contact us within 48 hours for a free replacement.
              </p>
            </div>

            <div className="retro-card p-6 bg-gray-900/50">
              <h3 className="font-bold mb-2 text-green-400">Can I visit the planted trees?</h3>
              <p className="text-gray-400 text-sm">
                Absolutely! We organize community visits to our planting sites. 
                Check our events page or contact us to join the next visit!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}