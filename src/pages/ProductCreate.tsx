import React, { useState } from 'react';
import { createProduct } from '../services/product';
import { ToastContainer, toast } from 'react-toastify';
const ProductCreate = () => {

    // 1st way - create state for each input
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');

    // 2nd way - create an object to store the input

    const [formData, setFormData] = useState({ title: '', price: 0, description: '', image: '' });

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       
        // object destructing
       // const name = event.target.name / "title", "price", "description", "image"
       // const value = event.target.value // formData.title, formData.price... 
        const { name, value } = event.target;

        // from the previous FormData, I will update the value of [name] // title, price, description, image
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        // to override the default behaviour of form submission
        e.preventDefault();

        // Call the API to create a new product
        setError("");
        setLoading(true);
        try {
            // Make API call to create product
            const response = await createProduct(formData);
             toast(`Product ${response.title} successfully added`);

        }
        catch (e: any) {
            setError(e.message);

        }finally {
            setLoading(false);
        }

        // Reset back the form
        setFormData({ title: '', price: 0, description: '', image: '' });
    }
  return (
     <div>
        <ToastContainer />
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
                <input type="text" id="title" name="title" value={formData.title} onChange={(e) => handleChange(e)} required />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={(e) => handleChange(e)} required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={(e) => handleChange(e)} required></textarea>
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={(e) => handleChange(e)} required />
            </div>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default ProductCreate