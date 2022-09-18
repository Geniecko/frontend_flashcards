import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/RoutesConstants';
import { NavigationLink, StyledNavigation } from './Navigation.style';

interface NavigationProps {
  isAuth: boolean;
}

const Navigation: FC<NavigationProps> = ({ isAuth }) => {
  return (
    <StyledNavigation>
      <NavigationLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        as={NavLink}
        to={`${ROUTES.HOME}`}
      >
        HOME
      </NavigationLink>
      <NavigationLink as={NavLink} to={`${ROUTES.FLASHCARDS}`}>
        FISZKI
      </NavigationLink>
      {isAuth && (
        <NavigationLink as={NavLink} to={`${ROUTES.MY_FLASHCARDS}`}>
          TWOJE FISZKI
        </NavigationLink>
      )}
      {isAuth && (
        <NavigationLink as={NavLink} to={`${ROUTES.ADD_FLASHCARD}`}>
          DODAJ FISZKE
        </NavigationLink>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
