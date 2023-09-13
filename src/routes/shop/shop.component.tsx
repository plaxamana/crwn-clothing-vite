import './shop.styles.scss';

import { useContext } from 'react';
import { IProduct, ProductsContext } from 'src/contexts/products.context';
import ProductCard from 'components/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
