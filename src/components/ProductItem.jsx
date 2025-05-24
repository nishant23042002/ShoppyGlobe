import { Link } from "react-router-dom"
import ProductRating from "./ProductRating"
import { useDispatch } from "react-redux"
import { addToCart } from "../utils/cartSlice"

function ProductItem({ product }) {
    const dispatch = useDispatch()

    return (
        <>
            <div className="w-[350px] rounded-2xl overflow-hidden border-1 border-gray-300 shadow-xl" key={product.id}>
                <div className="p-2 flex items-center justify-center flex-col">
                    <div className="w-50 my-2">
                        <img src={product?.images} alt={product?.title} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-600 hover:text-orange-700">{product.title}</h2>
                        <p className="text-sm text-gray-500 mt-2">Price $ {product.price }</p>
                        <ProductRating rating={product.rating} />
                    </div>
                    <div className="flex gap-2">
                        <Link to={`product/${product.id}`} key={product.id}>
                            <button className="my-3 p-3 border-1 border-gray-300 bg-yellow-500 font-semibold hover:bg-green-700 rounded-2xl hover:text-white cursor-pointer duration-300">View Details</button>
                        </Link>
                        <button onClick={() => dispatch(addToCart(product))} className="my-3 p-3 border-1 border-gray-300 bg-yellow-500 font-semibold hover:bg-green-700 rounded-2xl hover:text-white cursor-pointer duration-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem 