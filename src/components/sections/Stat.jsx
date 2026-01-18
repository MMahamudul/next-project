import React from 'react';

const Stat = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5 text-blue-800'>Statistics</h1>
            <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          <div>
            <h3 className="text-3xl font-bold">1k+</h3>
            <p>Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">99%</h3>
            <p>Uptime</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Stat;