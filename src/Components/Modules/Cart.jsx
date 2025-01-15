import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const carts = JSON.parse(sessionStorage.getItem("cart")) || [];

  const handleIncr = (id) => {
    const updatedCart = carts.map(e => {
      if (e.id === id) {
        return {
          ...e,
          quantity: e.quantity + 1,
        };
      }
      return e;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleDecr = (id) => {
    const updatedCart = carts.map(e => {
      if (e.id === id) {
        return {
          ...e,
          quantity: Math.max(1, e.quantity - 1),
        };
      }
      return e;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleRemove = (id) => {
    const updatedCart = carts.filter(e => e.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (!carts.length) {
    return <div className="text-center text-gray-500 mt-10">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto mt-10 px-4 pb-4">
      <div className="flex gap-8">
        {/* Left Section: Shopping Cart */}
        <div className="w-7/12 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between border-b pb-4">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-lg">{carts?.length} Items</h2>
          </div>
          <div className="mt-4 h-[350px] overflow-auto">
            <div className="grid grid-cols-12 text-gray-600 text-xs font-semibold uppercase border-b pb-2">
              <span className="col-span-5">Product Details</span>
              <span className="col-span-2 text-center">Quantity</span>
              <span className="col-span-2 text-center">Price</span>
              <span className="col-span-2 text-center">Total</span>
            </div>
            {carts.map((e) => (
              <div className="grid grid-cols-12 items-center hover:bg-gray-50 py-4 border-b" key={e.id}>
                <div className="col-span-5 flex items-center">
                  <img className="w-16 h-16 object-contain" src={e?.image} alt={e?.title} />
                  <div className="ml-4">
                    <h3 className="font-semibold text-sm">{e?.title}</h3>
                    <p className="text-red-500 text-xs">{e?.category}</p>
                    <button
                      className="text-xs text-gray-500 hover:text-red-500"
                      onClick={() => handleRemove(e?.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <button onClick={() => handleDecr(e?.id)} className="p-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <rect x="5" y="11" width="14" height="2" rx="1" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={e?.quantity}
                    readOnly
                    className="mx-2 w-8 text-center border rounded-md"
                  />
                  <button onClick={() => handleIncr(e?.id)} className="p-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 5c0-.55.45-1 1-1s1 .45 1 1v6h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6c0 .55-.45 1-1 1s-1-.45-1-1v-6H5c-.55 0-1-.45-1-1s.45-1 1-1h6V5z" />
                    </svg>
                  </button>
                </div>
                <span className="col-span-2 text-center font-medium">${e?.price}</span>
                <span className="col-span-2 text-center font-medium">${(e?.price * e?.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          {/* Continue Shopping Button */}
          <div className="flex justify-start mt-4">
            <Link to="/products">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-5/12 bg-white shadow-md rounded-lg p-6">
          <h2 className="font-semibold text-xl border-b pb-4">Order Summary</h2>
          <div className="flex justify-between mt-4">
            <span className="text-gray-600 text-sm">Items ({carts.length})</span>
            <span className="font-medium">${carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="mt-4">
            <label className="text-gray-600 text-sm block mb-2">Shipping</label>
            <select className="block w-full border rounded-md p-2 text-gray-600">
              <option>Standard Shipping - $10.00</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-gray-600 text-sm block mb-2">Promo Code</label>
            <input
              type="text"
              placeholder="Enter promo code"
              className="block w-full border rounded-md p-2"
            />
            <button className="w-full bg-red-500 text-white py-2 mt-2 rounded-md hover:bg-red-600">
              Apply
            </button>
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-medium">
              <span>Total Cost</span>
              <span>${(carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + 10).toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 mt-4 rounded-md hover:bg-indigo-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;