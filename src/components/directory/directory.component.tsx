import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

export interface ICategories extends Array<ICategory> {}

interface ICategory {
  id: number;
  title: string;
  imageUrl: string;
}

const Directory = ({ categories }: { categories: ICategories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category: ICategory) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
