import React, { useEffect, useState } from 'react';
import type { Product } from '../models/Product';
import { fetchProducts } from '../services/product';

const ProductList = () => {

    // Fetch product list from API
    // To store error state
    const [error, setError] = useState<string>("");

    // To store the product fetched from the API
    const [items, setItems] = useState<Product[]>([]);

    // to store loading state
    const [loading, setLoading] = useState<boolean>(true);

    const loadData = async () => {
        // reset error to ""
        // set loading = true
        setLoading(true);
        setError("");
        try {
            // when using async await needs to add asyc to the nearest function declaration
            const data = await fetchProducts();

            // set it to the data state
            setItems(data);
        }
        catch (e: any) {
            // If there is an error set it there
            setError(e.message);

        } finally {
            setLoading(false);
        }
    }

    // call it once the component is loaded
    useEffect(() => {
        loadData();

        return () => console.log("ProductList unmounted");
    }, [])

    if (loading) return <p>Loading.....</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <ul>
                {
                    items.map((item) => <li key={item.id}>{item.title} - {item.price}</li>)
                }
            </ul>
        </>

    )
}

export default ProductList