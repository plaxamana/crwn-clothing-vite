import { CartItemContainer, DetailsContainer } from './cart-item.styles';

export interface ICartItem {
  name: string;
  quantity: number;
  imageUrl: string;
  price: number;
}

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <DetailsContainer>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </DetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
