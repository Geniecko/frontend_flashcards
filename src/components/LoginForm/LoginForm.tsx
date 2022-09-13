import { FC, FormEvent, MouseEvent, useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { UsersData } from '../../store/types';
import { Button } from '../Button/Button.style';
import Headline from '../Headline/Headline';
import { Input } from '../Input/Input.style';
import Modal from '../Modal/Modal';
import { Container, Form, Row, StyledButton } from './LoginForm.style';

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
  }, [isModalOpen]);

  return (
    <Modal closeOnOutsideClick={true} isOpen={isModalOpen} handleOnClose={handleOnClose}>
      <Container>
        <Headline title='Enter your login details'/>
        <Form onSubmit={handleOnSubmit} autoComplete='off'>
          {validateMessageElement}
          <Row>
            <label htmlFor='login'>
              Login: </label>
              <Input type='text' name='login' value={login} onChange={handleOnChangeLogin} />
          </Row>
          <Row>
            <label htmlFor='password'>
              Password: </label>
              <Input
                type='password'
                name='password'
                autoComplete='off'
                value={password}
                onChange={handleOnChangePassword}
              />
           
          </Row>
          <Row>
            <StyledButton as={Button} type='submit'>Log in</StyledButton>
            <StyledButton as={Button} type='button' onClick={handleOnCloseModal}>
              Close
            </StyledButton>
          </Row>
        </Form>
      </Container>
    </Modal>
  );
};

export default LoginForm;
