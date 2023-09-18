import './shop.styles.scss';

import { useContext } from 'react';
import { CategoriesContext } from 'src/contexts/categories.context';
import CategoryPreview from 'components/category-preview/category-preview.component';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
