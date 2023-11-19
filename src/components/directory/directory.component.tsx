import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export interface ICategories extends Array<ICategory> {}

interface ICategory {
  id: number;
  title: string;
  imageUrl: string;
}

const Directory = ({ categories }: { categories: ICategories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category: ICategory) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
