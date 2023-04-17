import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cart() {
    const data = [
      {
        id: 1,
        img: "https://www.pexels.com/photo/woman-in-white-shirt-standing-next-to-dvd-cases-rack-2220315/",
        img2: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "THE OTHER SIDE GRAPHIC T-SHIRT",
        desc: "THE OTHER SIDE GRAPHIC T-SHIRT",
        isNew: true,
        oldprice : 19,
        price: 12,
    },
    {
      id: 2,
      img: "https://www.pexels.com/photo/woman-in-white-shirt-standing-next-to-dvd-cases-rack-2220315/",
      img2: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "THE OTHER SIDE GRAPHIC T-SHIRT",
      desc: "THE OTHER SIDE GRAPHIC T-SHIRT",
      isNew: true,
      oldprice : 19,
      price: 12,
  },
    ]
  return (
    <div className='cart'>
      <h1>Products in Your Cart</h1>
      {data?.map(item =>(
        <div className="item" key={item.id}>
          <img src={item.img2} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteIcon className='delete'/>
        </div>
        ))}

        <div className="total">
          <span>SUBTOTAL</span>
          <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset cart</span>
    </div>
  )
}
