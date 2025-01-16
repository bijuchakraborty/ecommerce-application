import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'
import HourglassGif from '../assets/Hourglass.gif'
import { PRODUCTS_BASE_URL } from '../assets/AllApi'

const CategorieProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${PRODUCTS_BASE_URL}/products/category/${name}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error.message);
            }
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