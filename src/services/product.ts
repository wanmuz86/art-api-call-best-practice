// API call will be happening here
// GET POST PUT DELETE

import type { Product } from "../models/Product";
import { api } from "../api";
// this is for the form input
// to transform the form data into product
export type ProductInput =
Pick<Product, 'title' | 'description' | 'image' | 'price' | 'category'>;

// Create (POST)

export const createProduct = async( data:ProductInput ): Promise<Product> => {
    // {...data} spread operator on the data
    const res = await api.post<Product>('/products', {...data, category:'misc'});
    return res.data;
}

// Read (GET)

export const fetchProducts = async (): Promise<Product[]> => {
    // GET = fakestoreapi.com/products

    const res = await api.get<Product[]>('/products');
    return res.data;
}


// Read by ID (GET)
export const fetchProductById = async (id: string): Promise<Product> => {   

    const res = await api.get<Product>(`/products/${id}`);
    return res.data;
}


// Update (PUT)


// Delete (DELETE)