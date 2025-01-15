import React, { useEffect, useState } from 'react'
import FeaturesCard from '../FeaturesCard'
import HourglassGif from '../../assets/Hourglass.gif'

const Categories = () => {

    const [caterories, setCategories] = useState([])

    useEffect(() => {
        const fetchCaterories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            setCategories(data)
        }
        fetchCaterories()
    }, [])

    if (caterories.length === 0)
        return <div className="flex flex-col items-center justify-center h-screen">
            <img src={HourglassGif} alt="Loading..." className="w-16 h-16 animate-spin" />
            <p className="mt-4 text-gray-700 text-lg font-medium">Loading, please wait...</p>
        </div>


    return (
        <FeaturesCard cards={caterories} />
    )
}

export default Categories