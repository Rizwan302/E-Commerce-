import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slider.scss'

const Slider = () => {

  const [currentSlider, setcurrentSlider] = useState(0)
    const data = [
        "https://images.pexels.com/photos/5705057/pexels-photo-5705057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8387123/pexels-photo-8387123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8074597/pexels-photo-8074597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    const prevSlider = () =>{
      setcurrentSlider(currentSlider === 0 ? 2 : (prev) => prev -1)
    }
    const nextSlider = () =>{
      setcurrentSlider(currentSlider === 2 ? 0 : (prev) => prev +1)
    }
  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlider}>
            <ArrowBackIcon/>
        </div>
        <div className="icon" onClick={nextSlider}>
            <ArrowForwardIcon/>
        </div>
      </div>

    </div>
  )
}

export default Slider

