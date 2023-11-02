import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {

  const [products, setProducts] = useState([]);
const [cart, setCart] = ([]);
  useEffect ( () => {
    fetch ('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handlAaddToCart = (product)=>{
    const newCart = [...cart, product];
    setCart(newCart);
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
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
            </div>



        </div>
    );
};

export default Shop;