import { createContext, useState } from 'react';
import PRODUCTS from 'src/shop-data.json';

export interface ProductI {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface Products extends Array<ProductI> {}

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState<Products>(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
