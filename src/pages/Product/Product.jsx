import React, { useState } from 'react'
import './Product.scss'

export default function Product() {

  const [selectedImg, setselectedImg] = useState(0)  

  const images = [
    "https://images.pexels.com/photos/14592813/pexels-photo-14592813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14592829/pexels-photo-14592829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
  ]
  return (
    
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=> setselectedImg(0)} />
          <img src={images[1]} alt="" onClick={e=> setselectedImg(1)} />
        </div>
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
      <div className="right"></div>
    </div>
  )
}
