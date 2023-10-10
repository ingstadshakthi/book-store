import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './products.css'
import axios from 'axios';

const filterBooks = (res, category, search) => {
    if (category !== "") {
        res = res.filter(product => product.category === category);
    }
    if (search !== "") {
        res = res.filter((product) => {
            return product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search) ||
                product.author.toLowerCase().includes(search)
        })
    }
    return res;
}

export default function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [products, SetProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getProducts = setTimeout(async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/book");
                SetProducts(filterBooks(response['data']['data'], category, search))
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err);
            }

        }, 400)
        return () => clearTimeout(getProducts)
    }, [search, category])
    return (
        <section>
            <div className='search-box'>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="NON-FICTION">Non Fiction</option>
                    <option value="FICTION">Fiction</option>
                    <option value="KIDS">Kids</option>
                    <option value="BIOGRAPHY">Biography</option>
                </select>
                <input type="text"
                    name='search'
                    className='search-input'
                    placeholder='Search Book'
                    value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            </div>
            {loading === true ? <h1 className='book-alert'>Loading...</h1> : products.length === 0 ? <h1 className='book-alert'>No Books Found</h1> : ''}
            <div className='product-list'>
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </section>
    )
}
