import './cart-item.styles.scss';

export interface ICartItem {
  name: string;
  quantity: number;
  imageUrl: string;
  price: number;
}

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
