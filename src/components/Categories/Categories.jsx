import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/1' className='link'>Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/2' className='link'>Sale</Link>
            </button>
        </div>
      </div>
      <div className="col">
      <div className="row">
      <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/3' className='link'>Sale</Link>
            </button>
      </div>
        
      </div>
      <div className="col col-l">
      <div className="row">
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/4' className='link'>Sale</Link>
            </button>
            </div>
        </div>
        <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/5' className='link'>Sale</Link>
            </button>
        </div>
        </div>
      </div>
      <div className="row">
      <img src="https://images.pexels.com/photos/7337799/pexels-photo-7337799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button>
                <Link to='/products/6' className='link'>Sale</Link>
            </button>
      </div>
      </div>
    </div>
  )
}
