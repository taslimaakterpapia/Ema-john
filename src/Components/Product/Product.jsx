import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
      const {img, name, price, seller , ratings} = props.product; 

      const handlAaddToCart = props.handlAaddToCart;
    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} start</p>
            </div>
           
           <button onClick={() => handlAaddToCart(props.product)} className='btn-cart'>
            Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            
        </div>
    );
};

export default Product;