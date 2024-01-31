import React from 'react'
import nn from '../image/00.jpg'
import Images from '../image/Image'

function Cortoon() {
  return (
    <div className='corttoon-full'>
      <h2 className='title'>Cortoon page</h2>
      <div className='cortton-side'>
       <img src='image/1.webp' style={{height:200,width:200}} />
      </div>
      <div className='cortton-center'>
      <img src='image/g11.jpg' />
      </div>
      <div className='carttoon-img'>
        <img alt='ben 10' src={nn} style={{height:500,width:500}} />
        <img alt='ben 10' src={require('../image/34.jpg')}  />
        
        <img alt='' src={Images.i00}/>
        {/* public directory */}
        
      </div>
      

    </div>
  )
}

export default Cortoon
