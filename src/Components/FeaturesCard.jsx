import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesCard = ({ cards = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-sm text-indigo-600 tracking-wide uppercase font-semibold mb-2">
                        Product Categories
                    </h2>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Explore Our Categories
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {cards.map((card, index) => (
                        <Link
                            key={index}
                            to={`/categories/${card}`}
                            className="group block"
                        >
                            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-indigo-500 transition duration-300">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600">
                                    {card}
                                </h2>
                                <p className="text-base text-gray-500 mb-4 text-center">
                                    Explore the best products in {card}.
                                </p>
                                <span className="inline-flex items-center text-indigo-600 font-medium group-hover:underline">
                                    View Products
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-1"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesCard;