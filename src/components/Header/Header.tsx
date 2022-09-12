import { FC, useContext, useState } from 'react';

import { StoreContext } from '../../store/StoreContext';

import { Button } from '../Button/Button.style';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { StyledHeader, Wrapper, UserPanel, UserName } from './Header.style';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const context = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    if (context?.user === null) {
      setIsModalOpen(true);
    } else {
      context?.setUser(null);
    }
  };

  const isAuth: boolean = context?.user !== null ? true : false;
  const setProperlyLabel = isAuth ? 'Log out' : 'Log in';

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Logo />
          <Navigation isAuth={isAuth} />
          <UserPanel>
            {isAuth && <UserName>{context?.user?.login}</UserName>}
            <Button onClick={handleOnClick}>{setProperlyLabel}</Button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
          </UserPanel>
        </Wrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
