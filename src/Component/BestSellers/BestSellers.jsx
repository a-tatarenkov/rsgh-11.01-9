import BestSellersItem from "./BestSellersItem/BestSellersItem";
import './BestSellers.css';
import {useEffect, useState} from "react";
import axios from "axios";

const BestSellers = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(newProducts => setProducts(newProducts.data))
    }, []);

    return (
        <div className='BestSellers'>
            {
                products.map((product) => <BestSellersItem product={product}/>)
            }
        </div>
    )
}

export default BestSellers;