import { FC, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';

const Header: FC = () => {
  const context = useContext(StoreContext);

  const setProperlyLabel = context?.user === null ? 'Log in' : 'Log out';

  return (
    <>
      <header>
        <button>{setProperlyLabel}</button>
      </header>
    </>
  );
};

export default Header;
