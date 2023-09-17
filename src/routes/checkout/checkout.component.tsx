import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from 'src/contexts/cart.context';
import CheckoutItem from 'components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <span className='total'>
        Total price: <strong>${totalPrice}</strong>
      </span>
    </div>
  );
};

export default Checkout;