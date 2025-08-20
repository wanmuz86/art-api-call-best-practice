import React, { useState } from 'react';
import { api } from '../api';

const ProductCreate = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        // to override the default behaviour of form submission
        e.preventDefault();

        // Call the API to create a new product
        setError("");
        setLoading(true);
        try {
            // Make API call to create product
            const response = await api.post('/products', {
                title,
                price,
                description,
                image
            });
            console.log("Product created successfully:", response.data);
        }
        catch (e: any) {
            setError(e.message);

        }finally {
            setLoading(false);
        }

        // Reset back the form
        setTitle('');
        setPrice(0);
        setDescription('');
        setImage('');
    }
  return (
     <div>
        <h2>Add new product</h2>
        {
            // conditional rendering topic
         error ?? <p>Error: {error}</p> 
        }
        {
             // conditional rendering topic
         loading ?? <p>Loading....</p> 
        }

        <form onSubmit={handleFormSubmission}>
            <div>
                <label htmlFor="title">Title:</label>
                {/* In form, 1st bind the variable to the property value of input
                implement onChange to update the state with the input value */}
                <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} required />
            </div>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default ProductCreate