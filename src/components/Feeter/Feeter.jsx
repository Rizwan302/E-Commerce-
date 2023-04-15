import React from 'react'
import './Feeter.scss'

export default function Feeter() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cooking</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos illo et iste ea minima inventore est eveniet dolores nulla saepe cumque ex, quis cum porro quam sequi in repellendus?</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos illo et iste ea minima inventore est eveniet dolores nulla saepe cumque ex, quis cum porro quam sequi in repellendus?</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Lamastore</span>
          <span className='copyright'>
          © Copyright 2023. All Rights Remix Software
          </span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
