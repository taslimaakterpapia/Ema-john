import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='reviewItem'>

            <img src={img} alt="" />

            <div className='review-data'>

                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'> ${price}</span></p>
                <p>Quantity: <span className='orange-text'> {quantity}</span></p>
                

            </div>

            <button className='dlt-btn'>D</button>

        </div>
    );
};

export default ReviewItem;