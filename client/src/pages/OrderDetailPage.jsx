import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetailPage = () => {
  const { id } = useParams();

  // Replace placeholder images with better ones
  const orderDetails = {
    id: 'ORD123456',
    date: '2023-11-15',
    status: 'Delivered',
    paymentMethod: 'Credit Card (**** 1234)',
    shippingAddress: '123 Main St, Apt 4B, New York, NY 10001',
    items: [
      {
        id: 1,
        name: 'Smartphone X',
        price: 9999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80'
      },
      {
        id: 2,
        name: 'Phone Case',
        price: 499,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 3,
        name: 'Screen Protector',
        price: 299,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80'
      }
    ],
    subtotal: 11096,
    shipping: 0,
    tax: 1997,
    total: 13093
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'out for delivery':
      case 'in transit':
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/orders" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Orders
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Order Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Order #{orderDetails.id}
                  </h1>
                  <p className="text-gray-600">
                    Placed on {new Date(orderDetails.date).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    orderDetails.status
                  )}`}
                >
                  {orderDetails.status}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Items</h2>
              <div className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex items-center border-b pb-4 last:border-b-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">
                        Qty: {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <p className="text-lg font-medium text-gray-900">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Timeline</h2>
              <div className="space-y-4">
                {orderDetails.timeline.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        index === 0 ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {event.status}
                      </p>
                      <p className="text-sm text-gray-600">{event.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(event.date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">{orderDetails.shipping.name}</p>
                <p className="text-gray-600">{orderDetails.shipping.address}</p>
                <p className="text-gray-600">
                  {orderDetails.shipping.city}, {orderDetails.shipping.state} {orderDetails.shipping.zipCode}
                </p>
                <p className="text-gray-600">{orderDetails.shipping.country}</p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  {orderDetails.payment.brand} ending in {orderDetails.payment.last4}
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$0.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage; 