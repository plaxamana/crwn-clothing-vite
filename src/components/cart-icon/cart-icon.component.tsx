import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsInCart } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsInCart}</span>
    </div>
  )
}

export default CartIcon;