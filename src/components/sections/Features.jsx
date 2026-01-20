import React from 'react';

const Features = () => {
    return (
        <div>
            
            <section className="py-10 bg-gray-50">
              <h1 className='text-center font-bold text-3xl my-5 text-blue-800'>Key Benefits</h1>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Compliance</h3>
            <p className="text-sm mt-2">Ultra fast customer care</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Commitment</h3>
            <p className="text-sm mt-2">Longer warranty and money back option</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Offering</h3>
            <p className="text-sm mt-2">Discount and good quality products</p>
          </div>
        </div>
      </section>

        </div>
    );
};

export default Features;