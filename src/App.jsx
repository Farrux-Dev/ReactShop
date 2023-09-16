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
const App = () => {
  const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
       <Route index element={<HomePage/>}></Route>
       <Route path="/about" element={<AboutPage/>}></Route>
       <Route path="/contact" element={<ContactPage/>}></Route>
       <Route path="/product" element={<ProductLayout/>}>
       <Route index element={<Product/>}></Route>
       <Route path=":id" element={<ProductDetail/>}></Route>
       </Route>
      </Route>
    )
  )
  return (
    
    <RouterProvider router={Routers}></RouterProvider>

  )
}

export default App
