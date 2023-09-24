import './directory-item.styles.scss';

export interface ICategory {
  category: {
    imageUrl: string;
    title: string;
  };
}

const DirectoryItem = ({ category }: ICategory) => {
  const { imageUrl, title } = category;

  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
