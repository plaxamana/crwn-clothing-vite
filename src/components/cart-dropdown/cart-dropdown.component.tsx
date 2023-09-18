import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button/button.component';
import './cart-dropdown.styles.scss';

import CartItem from 'components/cart-item/cart-item.component';
import { CartContext } from 'src/contexts/cart.context';
import { useClickAway } from 'src/hooks/useClickaway';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const ref = useClickAway(() => setIsCartOpen(false));

  const goToCheckout = () => navigate('/checkout');

  return (
    <div className='cart-dropdown-container' ref={ref}>
      <div className='cart-items'>
        {cartItems?.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
