import React from 'react';

const HowItWorks = () => {
    return (
        <div>
      
            <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className=' border-amber-50 shadow-md py-20 bg-blue-100 text-lg font-bold '>
                <p>1. Login securely</p>
            </div>
            <div className=' border-amber-50 shadow-md py-20  bg-blue-100 text-lg font-bold '>
                <p>2. Browse products</p>
            </div>
            <div className=' border-amber-50 shadow-md py-20  bg-blue-100 text-lg font-bold '>
                 <p>3. Add your own items</p>
            </div>
            
            
           
          </div>
        </div>
      </section>
        </div>
    );
};

export default HowItWorks;