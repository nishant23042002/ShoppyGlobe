function ProductItem({ product }) {
    return (
        <>
            <div className="w-[350px] rounded-2xl overflow-hidden cursor-pointer hover:scale-95 duration-300 border-1 border-gray-300 shadow-xl" key={product.id}>
                <div className="p-3 flex items-center justify-center flex-col">
                    <div className="w-50 my-4">
                        <img src={product.images} alt={product.title}/>
                    </div>
                    <h2 className="font-bold text-lg">{product.title}</h2>
                    <p className="text-sm text-gray-500 mt-2">$ {product.price}</p>
                    <p className="text-sm text-gray-400">{product.rating}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem