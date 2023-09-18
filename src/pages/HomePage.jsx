import React from 'react'
import './css/home.css'

const HomePage = () => {
  return (
    <div className='display_flex'>
      <div className='Shirt_category'>
        <ul>
         <span>Jul</span> <h2 style={{color:"blue"}}>Category</h2>
        
        </ul> <br /><br />
        <p style={{textAlign:"center"}}>I've had THIS pants for years founded by Farrukh so it's always a discount</p>
        <br /><br />
        <b>Farki-market</b>
      </div>
      <div className='Shirt_category'>
      <ul>
         <span>Jul</span> <h2 style={{color:"blue"}}>Category</h2>
        </ul><br /><br />
        <p style={{textAlign:"center"}}>I've had THIS pants for years founded by Farrukh so it's always a discount</p>
        <br /><br />
        <b>Farki-market</b>
        </div>
    
        <div className='Shirt_category'>
        <ul>
         <span>Jul</span> <h2 style={{color:"blue"}}>Category</h2>
        </ul><br /><br />
        <p style={{textAlign:"center"}}>I've had THIS pants for years founded by Farrukh so it's always a discount</p>
        <br /><br />
        <b>Farki-market</b>
        </div>
    </div>
  )
}

export default HomePage
