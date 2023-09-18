import React, { useState } from 'react'
import './css/card.css'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Card(props) {
  const [red, SetRed] = useState("black" , "red")
  const rgb = ()=>{
 

  }
  const { productss, title, image, price, id, addToBasket, onSearch, products   } = props
  const notify = () => toast("Go to backet!");
  return (
    <>
    {/* <div className='card2'>
      <div className="card-content">
        <img onClick={() => location.href = `/product/${products.id}`} src={productss.image} alt={productss.title} width="300" />
        <div className="card-container">
          <h2 key={productss.id}>Product name :{productss.title}</h2>
          <h3><i>Product price:</i> {productss.price}</h3>
           <h3>Raiting: {productss.rating.rate}</h3>
            <h3>Count :{productss.rating.count}</h3>
           </div>
           <div className="btn-shop">
           <button onClick={() => { addToBasket({ title, image, price, id, productss }) }} className='btn btn-buy'>Buy</button>
        </div>
      </div>
      </div> */}

{/* 
      <div className="card xl:w-1/4 md:w-1/2 p-4 border" >
        <div className="bg-gray-100 p-6 rounded-lg">
          <img  onClick={() => location.href = `/product/${products.id}`} className="card_img h-40 rounded  object-cover object-center mb-6" src={productss.image} lt={productss.title}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{productss.title}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{productss.price}</h2>
          <p className="leading-relaxed text-base">{productss.rating.rate}</p>
        </div>
      </div> */}
 




      <section className="text-gray-600 body-font border section">
        <span onClick={rgb}  style={{width:"40px", height:"40px", float:"right",marginTop:"1 0px", color:red}}><FavoriteBorderIcon/></span>
  <div className="cardd container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img onClick={() => location.href = `/product/${products.id}`} className="card_img lg:h-48 md:h-36 w-2 object-cover object-center" src={productss.image} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-sky-600" style={{color:"blue"}} >{productss.category.slice(0 ,20)}</h2>
            <ToastContainer />

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
            <p className="leading-relaxed mb-3" >{productss.title.slice(0, 10)}</p>
            <span className='card_rate'><span className='card_rate_flex'>{productss.rating.rate}  <span>( {productss.rating.count}  buys )</span></span></span>
            <span className='card_check'>{}</span>
            <span>{productss.price}$ usd</span>
            <button onClick={() => { addToBasket({ title, image, price, id, productss })}} className='btnBuy' style={{color:"white"}}><AddBusinessIcon/></button>
            <div className="flex items-center flex-wrap ">            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Card