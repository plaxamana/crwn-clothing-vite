import { useContext } from 'react';
import {
  ProductImage,
  AddToCart,
  Footer,
  ProductCardContainer,
} from './product-card.styles';

import { IProduct } from 'src/contexts/categories.context';
import { CartContext } from 'contexts/cart.context';

const ProductCard = ({ product }: { product: IProduct }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <AddToCart onClick={addProductToCart}>Add to cart</AddToCart>
    </ProductCardContainer>
  );
};

export default ProductCard;
