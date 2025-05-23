import { Link } from "react-router-dom";
import { useFetch } from "../customHook/useFetch"
import ProductItem from './ProductItem'

function ProductList() {
    const { products } = useFetch();

    return (
        <div>
            <h1>Product Lists</h1>

            <div className="flex flex-wrap gap-15 justify-center my-10">

                {
                    products.map((product) => <ProductItem product={product} />)
                }
            </div>

        </div>
    )
}

export default ProductList