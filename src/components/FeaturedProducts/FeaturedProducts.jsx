import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

export default function FeaturedProducts({type}) {

    const data = [
        {
            id: 1,
            img: "https://www.pexels.com/photo/woman-in-white-shirt-standing-next-to-dvd-cases-rack-2220315/",
            img2: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "THE OTHER SIDE GRAPHIC T-SHIRT",
            isNew: true,
            oldprice : 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/12301327/pexels-photo-12301327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/9321786/pexels-photo-9321786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "THE OTHER SIDE GRAPHIC T-SHIRT",
            isNew: true,
            oldprice : 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/13660533/pexels-photo-13660533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/13073461/pexels-photo-13073461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "THE OTHER SIDE GRAPHIC T-SHIRT",
            isNew: true,
            oldprice : 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/14592813/pexels-photo-14592813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/14592829/pexels-photo-14592829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "THE OTHER SIDE GRAPHIC T-SHIRT",
            isNew: true,
            oldprice : 19,
            price: 12,
        }
    ]
  return (
    <div className='featuredproducts'>
      <div className="top">
        <h1>{type} product</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima, facilis molestiae, atque illum, odit dolore eos perferendis quas sit veritatis! Natus qui, sint et laboriosam provident perspiciatis rem itaque?</p>
      </div>
      <div className="bottom">
        {data.map(item =>(
            <Card item={item}/>
        ))}
      </div>
    </div>
  )
}
