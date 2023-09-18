// Pages
import HomePage from "./pages/homePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/aboutPage"
import ZakazPage from "./pages/ZakazPage"

// Helper
import Product from "./pages/helper/Product"
import ProductDetail from "./pages/helper/ProductDetail"

// Router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layout
import RootLayout from "./layout/RootLayout"
import ProductLayout  from "./layout/RootLayout"
// Hooks
import { useState } from "react"
const App = () => {
  

  const [backet, setBacket] = useState([])

  const incr = (itemId) => {
    const newData = backet.map(item => {
      if (item.id === itemId) {
        const newCount = item.count + 1
        return {
          ...item,
          count: newCount
        }
      }
      else {
        return item
      }
    })
    setBacket(newData)
  }
  const decr = (itemId) => {
    const newData = backet.map(item => {
      if (item.id === itemId) {
        const newCount = item.count - 1
        if (newCount == 0) {
          e.target.disablet = true
        }
        return {
          ...item,
          count: newCount
        }
      }
      else {
        return item
      }
    })
    setBacket(newData)
  }

  const cardDelete = (btnId) => {
    setBacket((prev) => {
      return (
        prev.filter((item) => {
          return (btnId !== item.id)
        })
      )
    })
  }

  const addbasket = (item) => {
    const newbacket = {
      ...item,
      count: 1
    }
    setBacket([...backet, newbacket])
  }

  const addToBasket = (item) => {
    const length = backet.length
    if (length === 0) {
      const newBasket = {
        ...item,
        count: 1
      }
      setBacket([...backet, newBasket])
    } else {
      const prev = backet.filter(e => e.id === item.id)
      prev.map(item => (
        setBacket([item.count++, ...item])
      ))
      const newBasket = {
        ...item,
        count: 1
      }
      setBacket([...backet, newBasket])
    }
  }
  const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}>


       <Route index element={<HomePage/>}></Route>
       <Route path="/about" element={<AboutPage/>}></Route>
       <Route path="/contact" element={<ContactPage/>}></Route>

      
       <Route path="/product" element={<ProductLayout/>}>
             <Route index element={<Product backet={backet} setBacket={setBacket} addToBasket={addToBasket} addbasket={addbasket} incr={incr} decr={decr} cardDelete={cardDelete}  />}></Route>
             <Route path=':id' element={<ProductDetail/>}></Route>
       </Route>

      </Route>
      
    )
  )
  return (
    
    <RouterProvider router={Routers}></RouterProvider>

  )
}

export default App
