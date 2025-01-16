import React, { useEffect, useState } from 'react'
import banner1 from "../assets/Images/banner1.jpg"
import banner2 from "../assets/Images/banner2.jpg"
import banner3 from "../assets/Images/banner3.jpg"

const Hero = () => {
  const bannerArray = [banner1, banner2, banner3]
  const [imgIndex, setImgIndex] = useState(0)
  const handleAutoChange = () => {
    setImgIndex((prevValue) => {
      if (prevValue === bannerArray.length - 1) {
        return 0
      }
      return prevValue + 1
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleAutoChange()
    }, 2000)

    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [])

  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[650px] overflow-hidden relative">
      <img
        src={bannerArray[imgIndex]}
        alt="Full Width"
        className="w-full h-full object-cover object-center"
      />
      <button style={{ display: "none" }} onClick={handleAutoChange}>AutoChange</button>
    </div>
  )
}

export default Hero