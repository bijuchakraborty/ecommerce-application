import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };

  return (
    <section className="text-gray-600 body-font relative w-full">
      <div className="container px-5 py-16 mx-auto flex flex-wrap items-center justify-center w-full">
        <div className="lg:w-2/3 md:w-1/2 w-full bg-white p-10 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            If you're facing any issues, please let us know. We'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="reason" className="block text-gray-700 text-sm font-medium mb-2">
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="Order Issue">Order Issue</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                Describe Your Issue
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Please provide details about the issue you're facing."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-xl"
              >
                Submit
              </button>
            </div>
          </form>
          {isSubmitted && (
            <div className="mt-6 text-green-500 text-center">
              <p className="text-lg">Thank you! Your message has been sent successfully. We’ll contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;