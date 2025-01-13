import React, { useEffect, useState } from 'react'
import Categories from './Modules/Categories'
import Products from './Products'
import HourglassGif from '../assets/Hourglass.gif'

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts();
    }, [])
    return (
        <div>
            <Categories />
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-900">ALL PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                    <Products Products={products} />
                    : <div className="flex flex-col items-center justify-center h-screen">
                        <img src={HourglassGif} alt="Loading..." className="w-16 h-16 animate-spin" />
                        <p className="mt-4 text-gray-700 text-lg font-medium">Loading, please wait...</p>
                    </div>
            }
        </div>
    )
}

export default ProductContainer