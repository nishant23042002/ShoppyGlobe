import { useEffect, useState } from "react"

export function useFetch() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
            })

    }, []);

    return { products }
}

