import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalItem = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
    return (
        <>
            <div className="flex justify-end p-4 gap-9 shadow-xl bg-gray-200  text-xs xs:text-sm sm:text-xl">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><IoHome size={"18px"} /></span><Link to="/">Home</Link></div>
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><AiFillProduct size={"18px"} /></span><Link to="allproducts">All Products</Link></div>
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><FaCartShopping size={"18px"} /></span><Link to="cart">Cart {totalItem}</Link></div>
            </div>
        </>
    )
}

export default Header