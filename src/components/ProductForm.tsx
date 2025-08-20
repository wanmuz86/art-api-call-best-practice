import React from 'react'

const ProductForm = () => {
  return (
    <div>
        <h2>Add new product</h2>
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" required />
            </div>
        
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm