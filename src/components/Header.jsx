import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoHome } from "react-icons/io5";

function Header() {
    return (
        <>
            <div className="flex justify-end text-xl p-4 gap-9 shadow-xl bg-gray-200">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><IoHome size={"18px"} /></span><Link to="/">Home</Link></div>
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><AiFillProduct size={"18px"} /></span><Link to="product">ProductsDetails</Link></div>
                <div className="flex items-center justify-center gap-2 font-bold text-gray-700 hover:text-gray-500 hover:underline duration-250"><span><FaCartShopping size={"18px"} /></span><Link to="cart">Cart</Link></div>
            </div>
        </>
    )
}

export default Header