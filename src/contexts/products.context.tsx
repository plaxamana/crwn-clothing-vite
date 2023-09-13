import { createContext, useState, Dispatch, SetStateAction } from 'react';
import PRODUCTS from 'src/shop-data.json';

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface IProducts extends Array<IProduct> {}

interface IProductsContext {
  products: Array<IProduct>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState<IProducts>(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
