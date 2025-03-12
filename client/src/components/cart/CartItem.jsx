import React from 'react';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncrement = () => {
    updateQuantity(item._id, item.quantity + 1);
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    } else {
      removeFromCart(item._id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item._id);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
          
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-primary focus:outline-none"
              onClick={handleDecrement}
            >
              <FiMinus size={16} />
            </button>
            <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-primary focus:outline-none"
              onClick={handleIncrement}
            >
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <button
        type="button"
        className="ml-4 text-gray-400 hover:text-red-500 focus:outline-none"
        onClick={handleRemove}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem; 