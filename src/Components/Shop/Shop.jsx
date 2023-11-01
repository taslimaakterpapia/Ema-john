import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect ( () => {
    fetch ('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handlAaddToCart = (product)=>{
    console.log(product)
  }


    return (
        <div className='shop-container'>

            <div className="products-container">
                
          {
            products.map(product=><Product
            key={product.id}
            product={product}
            handlAaddToCart={handlAaddToCart}
            ></Product>)
          }


            </div>

            <div className="cart-container">
                <h1>summary</h1>
            </div>



        </div>
    );
};

export default Shop;