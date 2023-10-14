import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button/button.component';
import { CartContainer, CartItems} from './cart-dropdown.styles';

import CartItem from 'components/cart-item/cart-item.component';
import { CartContext } from 'src/contexts/cart.context';
import { useClickAway } from 'src/hooks/useClickaway';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const ref = useClickAway(() => setIsCartOpen(false));

  const goToCheckout = () => navigate('/checkout');

  return (
    <CartContainer ref={ref}>
      <CartItems>
        {cartItems?.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </CartItems>
      <Button
        onClick={goToCheckout}
        style={{ marginTop: 'auto', padding: 'unset' }}
      >
        Go to Checkout
      </Button>
    </CartContainer>
  );
};

export default CartDropdown;
