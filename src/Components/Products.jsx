import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ Products }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            Products.map((item) => {
                                const { id, title, price, category, image } = item
                                return (
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <div className="h-full flex flex-col border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                                            <Link to={`/products/${id}`} className="block relative h-48 flex-shrink-0">
                                                <img
                                                    alt={title}
                                                    className="object-contain object-center w-full h-full p-4"
                                                    src={image}
                                                />
                                            </Link>
                                            <div className="flex-grow p-4 flex flex-col">
                                                <h3 className="text-gray-500 text-xs tracking-widest uppercase font-semibold mb-1">
                                                    {category}
                                                </h3>
                                                <h2 className="text-gray-900 text-lg font-medium min-h-[48px]">
                                                    {title.slice(0, 50)}
                                                </h2>
                                                <p className="text-lg text-indigo-600 font-bold mt-auto">
                                                    ${price}
                                                </p>
                                                <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products