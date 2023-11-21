import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from './directory-item.styles';

export interface ICategory {
  category: {
    imageUrl: string;
    title: string;
    route: string;
  };
}

const DirectoryItem = ({ category }: ICategory) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer onClick={handleNavigation}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
