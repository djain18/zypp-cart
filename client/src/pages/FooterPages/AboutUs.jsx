import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About QuickCommerce</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-6">
              QuickCommerce was founded with a simple mission: to make online shopping seamless, 
              enjoyable, and accessible to everyone. Since our inception, we've been committed to 
              providing the best shopping experience possible, combining cutting-edge technology 
              with exceptional customer service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a world where quality products are just a click away, where shopping 
              is not just a transaction but an experience, and where every customer feels valued 
              and satisfied with their purchase.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Curated Selection: We carefully select each product to ensure quality and value.</li>
              <li className="mb-2">Customer First: Our dedicated support team is always ready to assist you.</li>
              <li className="mb-2">Fast Delivery: We partner with reliable logistics providers for quick delivery.</li>
              <li className="mb-2">Secure Shopping: Your data security is our top priority.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-6">
              We're committed to:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Providing authentic products at competitive prices</li>
              <li className="mb-2">Maintaining transparency in our operations</li>
              <li className="mb-2">Supporting sustainable and ethical business practices</li>
              <li className="mb-2">Continuously improving based on customer feedback</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
            <p>
              We invite you to be part of our growing community. Whether you're a first-time 
              shopper or a regular customer, we're here to serve you with the best online 
              shopping experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 