import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';

import { CartContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsInCart } = useContext(CartContext);

  return (
    <CartContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{itemsInCart}</ItemCount>
    </CartContainer>
  )
}

export default CartIcon;