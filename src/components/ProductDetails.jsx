import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../utils/cartSlice';
import ProductRating from "./ProductRating";
import { MdArrowBack } from "react-icons/md";
import { useSelector } from 'react-redux';
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

function ProductDetails() {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [params.id])

    const cartItemQuantity = (itemId) => {
        const found = cartItems.find(item => item.id === itemId);
        return found ? found.quantity : 0;
    }

    function handleaddItem(item) {
        dispatch(addToCart(item));
    }
    function handleRemoveItem(item) {
        dispatch(removeFromCart(item))
    }


    return (
        <>
            <div className="max-w-4xl mx-auto p-4 my-10">

                <Link to="/">
                    <button className="cursor-pointer mt-2 underline hover:text-green-600 flex gap-2 font-semibold text-xl my-2">
                        <span><MdArrowBack size={"30px"} /></span>Back
                    </button>
                </Link>

                <div className="flex flex-col md:flex-row gap-6 border p-4 rounded-xl shadow-lg border-gray-300">
                    <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/2 object-cover rounded-lg" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700">{product.title}</h1>
                        <p className="mt-2 text-gray-600 font-semibold">{product.description}</p>
                        <p className="underline text-blue-600 hover:text-black">Brand: {product.brand}</p>
                        <p className="mt-2 text-lg font-semibold text-green-600"><span className="text-red-700">-{product.discountPercentage}%</span>     ₹ {product.price * 85}</p>
                        <div className="text-md flex gap-3 items-center my-2">{product.rating}<ProductRating rating={product.rating} /></div>
                        <div>
                            {
                                cartItemQuantity(product.id) === 0 ? (
                                    <button onClick={() => handleaddItem(product)} className="p-2 bg-yellow-400 rounded-md border border-gray-300 font-bold hover:text-white duration-200 cursor-pointer">ADD to Cart</button>
                                ) : (
                                    <div className="flex items-center justify-between border w-30 border-gray-300 rounded-full overflow-hidden py-[6px] bg-yellow-400">
                                        <button onClick={() => handleRemoveItem(product)} className=" text-green-700 px-3 py-1 text-lg font-bold cursor-pointer"><FaMinus /></button>
                                        <span className="px-3 py-1 text-sm font-bold text-green-700">{cartItemQuantity(product.id)}</span>
                                        <button onClick={() => handleaddItem(product)} className="text-green-700 px-3 py-1 text-lg font-bold cursor-pointer"><TiPlus /></button>
                                    </div>
                                )
                            }
                        </div>
                        <p className="my-2 text-gray-700 font-semibold">{product.shippingInformation}</p>
                    </div>
                    <div className="relative flex items-center">
                        {
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails