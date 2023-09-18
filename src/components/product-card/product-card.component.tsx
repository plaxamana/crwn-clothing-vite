import { useContext } from 'react';
import './product-card.styles.scss';
import Button from 'components/button/button.component';

import { IProduct } from 'src/contexts/categories.context';
import { CartContext } from 'contexts/cart.context';

const ProductCard = ({ product }: { product: IProduct }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
