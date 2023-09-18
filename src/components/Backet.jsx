import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import "./css/Backet.css"
import "./css/basket.css"
import ShopModal from './ShopModal'
import StarRateIcon from '@mui/icons-material/StarRate';
import { ToastContainer, toast } from 'react-toastify';
function Backet({ closeBacketModal, backet, setBacket, incr, decr, cardDelete, price }) {
  const notify = () => toast("Product Delete")
  const [shop, setShop] = useState(false)
  const [mod, SetMod] = useState(false)
  const colseShop = () => {
    setShop(false)
  }
  var totalprice = 0
  return createPortal((
    <div className='BacketModalBack'>
      <div className='BacketModal'>
        < div className='basket-modal-container'>
          {
            backet.map(item => (
              totalprice += item.price*item.count,
              <div className='basked-modal' key={item.id}>
                <h1 className='basked-modal-title' style={{ fontSize: "20px" }}>{item.title}</h1>
                <div className="modal-container">
                  <img className='basked-modal-img' src={item.image} alt="" />
                  <span className='basked-modal-price'> Product price:  <i style={{ fontSize: "20px" }} className='basked-modal-price-i'>{item.price * item.count}$</i></span>
                  <div className='btn-group'>
                    <button onClick={() => decr(item.id)} className='btn-dec'>-</button>
                    <button className='btn-x'>{item.count}</button>
                    <button onClick={() => { incr(item.id) }} className='btn-inc'>+</button>
                  </div>
                  <button className="btn-delete" style={{backgroundColor:"aqua", borderRadius:"4px"}} onClick={() => { cardDelete(item.id), notify }}>O'chirish</button>
                  <ToastContainer />
                  <span>
                    {price}
                  </span>
                </div>
              </div>
            ))
          }
              <h2 className='backetTotal'>Total Price: 
{Math.trunc(totalprice)}$
</h2>
        
          <button className="btn_shop_button"  onClick={() => (setShop(true))}>{backet.length==0 ?"":"Sotib olish"}</button>
        </div>
        <button onClick={closeBacketModal} className='shop'>CLose</button>
        {shop && <ShopModal colseShop={colseShop} setBacket={setBacket} setShop={setShop}></ShopModal>}
      </div>
     {mod&&<ShopModal backet={backet} shop={shop}/>}
    </div>
  
  ), document.body)
}

export default Backet