import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Products from './Products'
import FeaturesCard from './FeaturesCard'
import StatCard from './StatCard'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts();
    }, [])
    return (
        <div>
            <Hero />
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length === 0 &&
                    <div>Loading........</div>
            }
            {
                products.length > 0 &&
                    <Products Products={products} />
            }
            <FeaturesCard />
            <StatCard />
        </div>
    )
}

export default Home