import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

function CartItems({ item }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)

    const cartItemQuantity = (itemId) => {
        const found = cartItems.find(item => item.id === itemId);
        return found ? found.quantity : 0;
    }

    function handleaddItem(item) {
        dispatch(addToCart(item));
    }
    function handleremoveItem(item) {
        dispatch(removeFromCart(item))
    }

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    return (
        <>
            <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-9 justify-between">
                {/* Left: Image + Title/Price */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md" />
                    <div className="text-sm sm:text-base">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">${item.price}</p>
                    </div>
                </div>

                {/* Middle: Quantity Buttons */}
                <div className="relative flex items-center bg-yellow-400 rounded-3xl w-full sm:w-auto justify-center">
                    {
                        cartItemQuantity(item.id) === 0 ? null : (
                            <div className="flex items-center justify-between w-full sm:w-auto border border-gray-300 rounded-full overflow-hidden py-[6px]">
                                <button onClick={() => handleremoveItem(item)} className="text-green-700 px-3 py-1 text-lg font-bold cursor-pointer">
                                    <FaMinus />
                                </button>
                                <span className="px-3 py-1 text-sm font-bold text-green-700">{cartItemQuantity(item.id)}</span>
                                <button onClick={() => handleaddItem(item)} className="text-green-700 px-3 py-1 text-lg font-bold cursor-pointer">
                                    <TiPlus />
                                </button>
                            </div>
                        )
                    }
                </div>

                {/* Right: Total */}
                <h3 className="text-sm sm:text-lg font-semibold text-center sm:text-left w-full sm:w-auto">Total: ${total.toFixed(2)}</h3>
            </div>

        </>
    )
}

export default CartItems