import { useFetch } from "../customHook/useFetch"
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function AllProducts() {
    const { products } = useFetch();
    const dispatch = useDispatch()

    return (
        <>
            <Link to="/">
                <button className="cursor-pointer mt-2 underline hover:text-green-600 flex gap-2 font-semibold text-xl my-2">
                    <span><MdArrowBack size={"30px"} /></span>Back
                </button>
            </Link>
            <div className="flex flex-wrap gap-15 justify-center my-10">
                {
                    !products ? <p>Loading.....</p> :
                        products.map((product) => {
                            return (
                                <div className="w-[350px] rounded-2xl overflow-hidden border-1 border-gray-300 shadow-xl" key={product.id}>
                                    <div className="p-2 flex items-center justify-center flex-col">
                                        <div className="w-50 my-2">
                                            <img src={product.images} alt={product.title} />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-lg text-gray-600 hover:text-orange-700">{product.title}</h2>
                                            <p className="text-sm text-gray-500 mt-2">$ {product.price}</p>
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
                            )
                        })
                }
            </div>
        </>
    )
}

export default AllProducts