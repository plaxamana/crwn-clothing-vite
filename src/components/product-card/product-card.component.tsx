import './product-card.styles.scss';
import Button from 'components/button/button.component';

import { IProduct } from 'src/contexts/products.context';

const ProductCard = ({ product }: { product: IProduct }) => {
  const { imageUrl, name, price } = product;
  
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
