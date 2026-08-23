import { Routes , Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import FindDevice from "../pages/FindDevice/FindDevice"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/SignUp"
import Wishlist from "../pages/Wishlist/Wishlist"
import Search from "../pages/Search/Search"
import Contact from "../pages/Contact/Contact"
import NotFound from "../pages/NotFound/NotFound"

import MainLayout from "../layouts/MainLayout"

export default function AppRoutes(){
    return(
        <Routes >
            <Route element={<MainLayout/>}>
               <Route path="/" element={<Home /> } />
               <Route path="/products" element={<Products /> } />
               <Route path="/products/:id" element={<ProductDetails /> } />
               <Route path="/cart" element={<Cart /> } />
               <Route path="/findDevice" element={<FindDevice /> } />
               <Route path="/wishlist" element={<Wishlist /> } />
               <Route path="/search" element={<Search /> } />
               <Route path="/contact" element={<Contact /> } />
            </Route>

            <Route path="/login" element={<Login /> } />
            <Route path="/signup" element={<Signup /> } />
            <Route path="/checkout" element={<Checkout /> } />
            <Route path="*" element={<NotFound /> } />

        </Routes>
    )
}