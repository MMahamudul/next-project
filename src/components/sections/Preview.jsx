import React from 'react';

const Preview = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5 text-blue-800'>Categories</h1>
           <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {['Electronics', 'Fashion', 'Books', 'Sports'].map(c => (
              <div key={c} className="bg-white p-6 rounded shadow text-center">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Preview;