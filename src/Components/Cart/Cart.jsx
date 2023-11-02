import './Cart.css';

const Cart = ({ cart }) => {
     console.log(cart);

     let total = 0;
     for(const product of cart){
        total = total + product.price;
     }

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <p>Grand Total: $</p>
        </div>
    );
};

export default Cart;