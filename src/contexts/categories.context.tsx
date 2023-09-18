import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import { getCategoriesAndDocuments } from 'utils/firebase/firebase.utils';

export interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ICategories extends Array<ICategory> {}

interface ICategoriesContext {
  categoriesMap: Array<ICategory>;
  setCategoriesMap: Dispatch<SetStateAction<ICategory[]>>;
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState<ICategories>({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
