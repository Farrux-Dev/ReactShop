import React, { useState } from 'react'
import Backet from './Backet'
import "../components/css/Backet.css"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { FaBasketballBall } from "react-icons/fa"

function BacketModal({ backet, setBacket, incr, decr, cardDelete, productPrice }) {
  const [basket, setBasket] = useState(false)
  const closeBacketModal = () => {
    setBasket(false)
  }

  return (
    <>
      {basket && <Backet closeBacketModal={closeBacketModal} backet={backet} setBacket={setBacket} incr={incr} decr={decr} cardDelete={cardDelete} ></Backet>}
         <div className="basked-container" onClick={() => setBasket(true)} >
         <span id='baskedball-icon' style={{ width: "90px", height: "50px", position: "absolute" }} className='backet_icon'><span style={{fontSize:"42px"}} className="material-symbols-outlined"><ShoppingBagIcon/><h1 className='count' style={{ position: "absolute", marginTop: "-40px",fontSize:"22px", marginLeft: "50px", color: "red" }}>{backet.length == 0 ? " " : backet.length}</h1>
        </span></span>
      </div>
    </>
  )
}

export default BacketModal
