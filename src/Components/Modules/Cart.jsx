import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMinus, HiMiniPlus } from "react-icons/hi2";

const Cart = () => {
  const navigate = useNavigate();
  const carts = JSON.parse(sessionStorage.getItem("cart")) || [];

  const handleIncr = (id) => {
    const updatedCart = carts.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          quantity: e.quantity + 1,
        };
      }
      return e;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);

    navigate('/cart');
  };

  const handleDecr = (id) => {
    const updatedCart = carts.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          quantity: Math.max(1, e.quantity - 1),
        };
      }
      return e;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);

    navigate('/cart');
  };

  const handleRemove = (id) => {
    const updatedCart = carts.filter((e) => e.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);

    navigate('/cart');
  };

  if (!carts.length) {
    return (
      <div className='mt-12 mb-12'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuCwnJdFhNhdvMC7CnqGcCbk-HvCC9YGADw&s' alt='emptyCart' className="w-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-4 my-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-7/12 bg-white shadow-md rounded-lg p-4 lg:p-6">
          <div className="flex justify-between border-b pb-4">
            <h1 className="font-bold text-xl md:text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-md md:text-lg">{carts?.length} Items</h2>
          </div>
          <div className="mt-4">
            {carts.map((e) => (
              <div
                className="grid grid-cols-12 items-center py-4 border-b gap-4 md:gap-6 hover:bg-gray-50"
                key={e.id}
              >
                <div className="col-span-12 md:col-span-5 flex items-start gap-4">
                  <img
                    className="w-24 h-24 md:w-16 md:h-16 object-contain"
                    src={e?.image}
                    alt={e?.title}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm md:text-base">{e?.title}</h3>
                    <p className="text-red-500 text-xs md:text-sm">{e?.category}</p>
                    <button
                      className="text-xs md:text-sm text-gray-500 hover:text-red-500"
                      onClick={() => handleRemove(e?.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleDecr(e?.id)}
                    className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    <HiOutlineMinus />
                  </button>
                  <input
                    type="text"
                    value={e?.quantity}
                    readOnly
                    className="w-12 text-center border rounded-md"
                  />
                  <button
                    onClick={() => handleIncr(e?.id)}
                    className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    <HiMiniPlus />
                  </button>
                </div>
                <div className="col-span-6 md:col-span-2 text-center font-medium">
                  ${e?.price}
                </div>
                <div className="col-span-6 md:col-span-2 text-center font-medium">
                  ${(e?.price * e?.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <Link to="/products">
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg mt-4">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-5/12 bg-white shadow-md rounded-lg p-4 lg:p-6">
          <h2 className="font-semibold text-xl border-b pb-4">Order Summary</h2>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Items ({carts.length})</span>
              <span className="font-medium">
                ${carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}
              </span>
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
                <span>
                  $
                  {(
                    carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
                    10
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-indigo-500 text-white py-2 mt-4 rounded-md hover:bg-indigo-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;