import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const initialState = {
    name: "",
    author: "",
    price: 0,
    description: "",
    isbn: "",
    category: "",
    image: ""
};

import './createProduct.css'

function CreateProduct() {
    const [product, setProduct] = useState(initialState);

    const navigate = useNavigate();
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/api/book",
                { ...product }
            );
            navigate('/');

        } catch (err) {
            alert(err.response.data.msg);
        }
    };

    return (
        <div className="create-product">

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required value={product.name} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" required value={product.author} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required value={product.description} rows="5" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="isbn">Isbn</label>
                    <input type="text" name="isbn" id="isbn" required value={product.isbn} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" name="image" id="image" required value={product.image} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput}>
                        <option value="NON-FICTION">Non Fiction</option>
                        <option value="FICTION">Fiction</option>
                        <option value="KIDS">Kids</option>
                        <option value="BIOGRAPHY">Biography</option>
                    </select>
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateProduct;