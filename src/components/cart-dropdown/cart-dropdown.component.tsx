import { useContext } from 'react';
import Button from 'components/button/button.component';
import './cart-dropdown.styles.scss';

import CartItem from 'components/cart-item/cart-item.component';
import { CartContext } from 'src/contexts/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems?.map(cartItem => <CartItem cartItem={cartItem} />)}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
