import './Cart.css';

const Cart = ({ cart }) => {
     console.log(cart);

     let total = 0;
     let totalShipping = 0;
     let quantity = 0 ;
     for(const product of cart){
        // if(product.quantity ===0){
        //     product.quantity = 1
        // }
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
     const tax = total*7/100;
     const grandTotal = total+ totalShipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;