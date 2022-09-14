import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/RoutesConstants';
import { StyledLogo } from './Logo.style';

const Logo: FC = () => {
  return (
    <Link to={ROUTES.HOME}>
      <StyledLogo>
        Frontend <span>FISZKI</span>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
