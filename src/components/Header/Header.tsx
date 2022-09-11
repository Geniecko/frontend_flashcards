import { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import { ROUTES } from '../../utils/RoutesConstants';
import LoginForm from '../LoginForm/LoginForm';

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

  const isAuth = context?.user !== null ? true : false;
  const setProperlyLabel = isAuth ? 'Log out' : 'Log in';

  return (
    <>
      <header>
        <Link to={`${ROUTES.HOME}`}>Home</Link>
        {isAuth && <Link to={`${ROUTES.MY_ARTICLE}`}>My Articles</Link>}
        {isAuth && <Link to={`${ROUTES.ADD_ARTICLE}`}>Add Article</Link>}
        <div>
          {isAuth && <span>{context?.user?.login}</span>}
          <button onClick={handleOnClick}>{setProperlyLabel}</button>
          <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
