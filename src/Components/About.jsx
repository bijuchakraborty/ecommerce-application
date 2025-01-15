import React from 'react';

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="about"
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b24lMjBsaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Elite Fusion
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to Elite Fusion, your one-stop destination for premium products across 
            clothing, jewelry, electronics, and more. We are committed to providing you with 
            the finest selection of quality products, unmatched customer service, and a 
            shopping experience that’s both seamless and enjoyable.
          </p>
          <p className="mb-8 leading-relaxed">
            At Elite Fusion, we believe in the power of style, innovation, and reliability. 
            Every product is carefully curated to meet your needs, ensuring you find exactly 
            what you're looking for. Whether you're shopping for the latest fashion trends, 
            exquisite jewelry, or cutting-edge electronics, we’ve got you covered.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => alert("Learn More functionality can be added here!")}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;