import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/Usefetch'
import "./productD.css"
const ProductDetail = () => {
  const { id } = useParams()
  const url = "https://fakestoreapi.com/products/" + id
  const { data: product, isPanding, error } = useFetch(url)

  return (
    <>
    {isPanding&&<div class="custom-loader"></div>}
      <div className="product-container">
        {
          product && <div className="product-card">
            <img src={product.image} alt={product.title} className='product-img' />
            <div className="product-about">
              <h2 style={{color:"blue" , textAlign:"center"}}> {product.category}</h2>
              <h3 className='product-title'>Product name: {product.title}</h3><br />
              <h3 className='product-desc'>Product description: {product.description}</h3>
              <div className='shop_button'>
                  <button class="border2">Sell Now</button> <button className='button'>Backet</button>
              </div>
            
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ProductDetail
