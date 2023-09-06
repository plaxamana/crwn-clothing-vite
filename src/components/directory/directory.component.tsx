import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

export interface Categories extends Array<Category> {}

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

const Directory = ({ categories }: { categories: Categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
