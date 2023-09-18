import { NavLink , Outlet } from 'react-router-dom'
import  './css/rootlayout.css'
import Footer from '../Footer/Footer'
const RootLayout = () => {
  return (
    <div>
      

 <nav>

        <div className='navItem'>


        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product"  >Product</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
        </div>
 </nav>
 
        <Outlet></Outlet>
        

        
    </div>
  )
}

export default RootLayout
