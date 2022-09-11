import { FC, FormEvent, MouseEvent, useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { UsersData } from '../../store/types';
import Modal from '../Modal/Modal';
import { Container } from './LoginForm.style';

interface LoginFormProps {
  isModalOpen: boolean;
  handleOnClose: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ isModalOpen, handleOnClose }) => {
  const context = useContext(StoreContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validateMessage, setValidateMessage] = useState('');

  const resetState = () => {
    setLogin('');
    setPassword('');
    setValidateMessage('');
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login.length === 0 || password.length === 0) {
      setValidateMessage('Fill field');
      return;
    }

    const response = await fetch('data/users.json');

    const users: UsersData = await response.json();

    const user = users?.find((user) => user.login === login);

    if (user !== undefined && user.password === password) {
      context?.setUser(user);
      resetState();
      handleOnClose();
    } else {
      setValidateMessage('Invalid login or password');
    }
  };

  const handleOnChangeLogin = (event: FormEvent<HTMLInputElement>) =>
    setLogin(event.currentTarget.value);

  const handleOnChangePassword = (event: FormEvent<HTMLInputElement>) =>
    setPassword(event.currentTarget.value);

  const handleOnCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleOnClose();
  };

  const validateMessageElement = validateMessage.length ? <p>{validateMessage}</p> : null;

  useEffect(() => {
    resetState();
  }, [])

  return (
    <Modal closeOnOutsideClick={true} isOpen={isModalOpen} handleOnClose={handleOnClose}>
      <Container>
        <form onSubmit={handleOnSubmit} autoComplete='off'>
          {validateMessageElement}
          <div>
            <label htmlFor='login'>
              <input type='text' name='login' value={login} onChange={handleOnChangeLogin} />
            </label>
          </div>
          <div>
            <label htmlFor='password'>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleOnChangePassword}
              />
            </label>
          </div>
          <div>
            <button type='submit'>Log in</button>
            <button type='button' onClick={handleOnCloseModal}>
              Close
            </button>
          </div>
        </form>
      </Container>
    </Modal>
  );
};

export default LoginForm;
