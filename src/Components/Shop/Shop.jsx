import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

  const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
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
               <Cart cart={cart}></Cart>
            </div>



        </div>
    );
};

export default Shop;