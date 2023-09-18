import React, { useState } from 'react'
import { createPortal } from "react-dom"
import "./css/shopModal.css"
function ShopModal({ colseShop, backet ,shop,  setBacket ,setShop }) {
  return(

    
    <>
       <div className='modal_back'>
        <div className='modal'>
            <form >
            <h2 className='b2' style={{textAlign:"center", marginTop:"20px", }}>Kataklarni to'ldiring va sotib oling</h2>
    <input type="text" placeholder='Name' />
    <input type="text" placeholder='Telefone number' />
    <input type="text" placeholder='Card Number' />
    <input type="text" placeholder='Card svv'/>
            </form>
    <button className='ButtonCl' onClick={()=>setShop(false)}>close</button>
        </div>
       </div>
        
    </>
  )
}

export default ShopModal