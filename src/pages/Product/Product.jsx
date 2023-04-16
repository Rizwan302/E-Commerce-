import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export default function Product() {

  const [selectedImg, setselectedImg] = useState(0)  
  const [quantity, setquantity] = useState(1)  

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
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt deserunt tenetur architecto molestiae obcaecati quia repellat, totam saepe corrupti quod rerum voluptas, amet voluptates ipsa dolore pariatur nesciunt! Et!</p>
        <div className="quantity">
          <button onClick={()=> setquantity((prev) => prev===1 ? 1: prev-1)}>-</button>
          {quantity}
          <button onClick={()=> setquantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
            <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: polo</span>
          <span>Product Type T-Shirt</span>
          <span>Tag: T_Shirt, Women, Top</span>
        </div>
        <hr/>

        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATTION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
