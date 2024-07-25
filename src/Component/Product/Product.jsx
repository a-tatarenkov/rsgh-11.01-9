import axios from "axios";
import {useEffect, useState} from "react";
import './Product.css';
import {useNavigate, useParams} from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Product = () => {
    let [product, setProduct] = useState({});
    let {productId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(product => setProduct(product.data))
    }, []);

    const backToBestSellersHandler = () => {
        navigate('/');
    }

    return (
        <div className='Product'>
            <img src={product.image} alt='product'/>
            <div className='container'>
                <h1>{product.title}</h1>
                <h2>Price: {product.price}$</h2>
                <h2>Category: {product.category}</h2>
                <p>{product.description}</p>
                <button onClick={() => backToBestSellersHandler()}>Back to Best Sellers</button>
                <button>Add to cart</button>
                <Reviews/>
            </div>
        </div>
    )
}

export default Product;