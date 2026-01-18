import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <div>
             <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Start Selling Today</h2>
        <Link
          href="/add-item"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded font-semibold"
        >
          Add Your Item
        </Link>
      </section>
        </div>
    );
};

export default CTA;