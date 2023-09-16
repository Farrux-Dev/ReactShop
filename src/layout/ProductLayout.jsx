import { Outlet } from "react-router-dom"

const ProductLayout = () => {
  return (
    <div className='box'>
    <Outlet></Outlet>
  </div>
  )
}

export default ProductLayout
