import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'
import HourglassGif from '../assets/Hourglass.gif'

const CategorieProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts();
    }, [])
    return (
        <div>
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

export default CategorieProducts