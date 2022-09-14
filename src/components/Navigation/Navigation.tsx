import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/RoutesConstants';
import { NavigationLink, StyledNavigation } from './Navigation.style';

interface NavigationProps {
  isAuth: boolean;
}

const Navigation: FC<NavigationProps> = ({ isAuth }) => {
  return (
    <StyledNavigation>
      <NavigationLink as={Link} to={`${ROUTES.HOME}`}>
        Home
      </NavigationLink>
      <NavigationLink as={Link} to={`${ROUTES.FLASHCARDS}`}>
        Flashcards
      </NavigationLink>
      {isAuth && (
        <NavigationLink as={Link} to={`${ROUTES.MY_FLASHCARDS}`}>
          My Flashcards
        </NavigationLink>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
