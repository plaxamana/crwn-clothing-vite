import './shop.styles.scss';

import { useContext } from 'react';
import { ProductI, ProductsContext } from 'src/contexts/products.context';
import ProductCard from 'components/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product: ProductI) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
