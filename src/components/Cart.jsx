import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()


     function handleClearCart() {
        dispatch(clearCart())
    }


    return (
        <>
            <Link to="/">
                <button className="cursor-pointer mt-2 underline hover:text-green-600 flex gap-2 font-semibold text-xl my-2">
                    <span><MdArrowBack size={"30px"} /></span>Back
                </button>
            </Link>
            <div className="mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <div className="flex items-center justify-center my-6">
                    <button className="p-3 border-1 border-gray-300 rounded-xl font-bold text-red-600 cursor-pointer hover:bg-red-400 hover:text-white duration-300" onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="py-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border border-gray-200 p-4 rounded-xl shadow-md">
                            <CartItems item={item} key={item.id} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Cart