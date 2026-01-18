import React from 'react';

const Features = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5 text-blue-800'>Key Benefits</h1>
            <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Fast</h3>
            <p className="text-sm mt-2">Lightning fast performance</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Secure</h3>
            <p className="text-sm mt-2">Protected routes and login</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-lg">Scalable</h3>
            <p className="text-sm mt-2">MongoDB backend ready to grow</p>
          </div>
        </div>
      </section>

        </div>
    );
};

export default Features;