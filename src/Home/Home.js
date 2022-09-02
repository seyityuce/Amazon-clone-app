import React from 'react'
import Product from '../Product/Product'
import "./Home.css"


function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img 
          className='home-image'
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg" 
        />
        
        <div className='home-row top-row'>
          <Product
            title="The Lean Startup"
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg"
            price={29.99}
            rating={3}
          />
          {/* <Product/> */}
        </div>
        
        <div className='home-row'>
        {/* <Product />
        <Product/>
        <Product/> */}
        </div>

        <div className='home-row'>
          {/* <Product/> */}
        </div>
      </div>
    </div>
  )
}

export default Home