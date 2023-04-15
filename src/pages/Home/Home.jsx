import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories />
      <FeaturedProducts type="Trending"/>

    </div>
  )
}
