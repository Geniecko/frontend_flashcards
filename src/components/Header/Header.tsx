import { FC, useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreContext';
import LoginForm from '../LoginForm/LoginForm';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const context = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);
  
  const handleOnClick = () => {
    if(context?.user === null) {
      setIsModalOpen(true);
    } else {
      context?.setUser(null);
    }
  }

  const setProperlyLabel = context?.user === null ? 'Log in' : 'Log out';

  return (
    <>
      <header>
        <button onClick={handleOnClick}>{setProperlyLabel}</button>
        <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
      </header>
    </>
  );
};

export default Header;
