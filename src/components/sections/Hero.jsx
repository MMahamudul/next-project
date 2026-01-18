import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Buy & Sell Amazing Products
          </h1>
          <p className="mt-4 text-lg">
            Simple marketplace built with Next.js & MongoDB
          </p>
          <Link
            href="/items"
            className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded font-semibold"
          >
            Browse Items
          </Link>
        </div>
      </section>
        </div>
    );
};

export default Hero;