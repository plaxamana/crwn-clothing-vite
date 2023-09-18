import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';
import { ICartItem } from 'components/cart-item/cart-item.component';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { removeItemFromCart, clearItemFromCart, addItemToCart } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;

  const decrementQuantity = () => removeItemFromCart(cartItem);
  const incrementQuantity = () => addItemToCart(cartItem);
  const removeItem = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button className='arrow' onClick={decrementQuantity}>
          &#10094;
        </button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={incrementQuantity}>
          &#10095;
        </button>
      </span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={removeItem}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
