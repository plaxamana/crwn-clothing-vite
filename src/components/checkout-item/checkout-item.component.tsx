import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';
import { ICartItem } from 'components/cart-item/cart-item.component';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;

  const decrement = () => removeItemFromCart(cartItem);
  const increment = () => addItemToCart(cartItem);
  const removeItem = () => removeItemFromCart(cartItem, true);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={removeItem}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
