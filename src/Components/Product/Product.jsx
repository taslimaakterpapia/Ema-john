import './Products.css';

const Product = (props) => {
      const {img, name, price, seller , ratings} = props.product; 

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Ratings:{ratings} start</p>


            
        </div>
    );
};

export default Product;