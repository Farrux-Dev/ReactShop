import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/card'
import './css/Product.css'
import BacketModal from '../../components/backetModal'
function Product({ backet, setBacket, incr, decr, cardDelete, addbasket, addToBasket , newProduct}) {
  const url = "https://fakestoreapi.com/products"
  const { data: products, isPanding, error } = useFetch(url)
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
 

  return (
    <>
    <header>         
     
      <BacketModal style={{ marginTop: "4%" }} backet={backet} setBacket={setBacket} incr={incr} decr={decr} cardDelete={cardDelete} product={products}></BacketModal>
      <input type="text" value={searchTerm} onChange={handleSearch}  placeholder="Search" className='search_input' />
      <div className='search-result' style={{ marginTop: "10%" }}>
 
        <h1 style={{ color: "blueviolet", textAlign: "center" }}></h1>

      </div>
      <ul >
      
        {products && products
          .filter((productss) => productss.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((productss) => (
            <div className="card" key={productss.id}>
              <Card products={productss} key={productss} onSearch={handleSearch} addbasket={addbasket} {...productss} addToBasket={addToBasket} productss={productss} />
            </div>
          ))}
      </ul>
      <div key={products}>
        {isPanding &&<div className="custom-loader2"></div>}
        {error && <h1 className='error'>{error}</h1>}
      </div>
      </header>
    </>
  )
}

export default Product