import { FC, FormEvent, MouseEvent, useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { Button } from '../Button/Button.style';
import Headline from '../Headline/Headline';
import Modal from '../Modal/Modal';
import { Textarea } from '../Textarea/Textarea.style';
import { Container, Form, Row, StyledButton } from './EditForm.style';

interface EditFormProps {
  isModalOpen: boolean;
  handleOnClose: () => void;
  id: number;
}

const EditForm: FC<EditFormProps> = ({ isModalOpen, handleOnClose, id }) => {
  const context = useContext(StoreContext);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [validateAnswerMessage, setValidateAnswerMessage] = useState('');
  const [validateQuestionMessage, setValidateQuestionMessage] = useState('');

  const resetAll = () => {
    setValidateAnswerMessage('');
    setValidateQuestionMessage('');
    setQuestion('');
    setAnswer('');
  };

  const editQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (question.trim() === '') {
      return;
    } else if (question.length > 5 && question.length <= 200) {
      context?.setFlashcards((prev) => {
        const index = prev.findIndex((flashcard) => flashcard.id === id);

        if (index !== -1) {
          prev[index].question = question;
        }

        return prev;
      });

      setQuestion('');
      setValidateQuestionMessage('Zaktualizowano');
    } else {
      setValidateQuestionMessage(
        'Przód karty musi był dłuższy niż 5 znaków oraz krótszy niż 200 znaków',
      );
      return;
    }
  };

  const editAnswer = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (answer.trim() === '') {
      return;
    } else if (answer.length > 5 && answer.length <= 200) {
      context?.setFlashcards((prev) => {
        const index = prev.findIndex((flashcard) => flashcard.id === id);

        if (index !== -1) {
          prev[index].answer = answer;
        }

        return prev;
      });

      setAnswer('');
      setValidateAnswerMessage('Zaktualizowano');
    } else {
      setValidateAnswerMessage(
        'Tył karty musi był dłuższy niż 10 znaków oraz krótszy niż 400 znaków',
      );
      return;
    }
  };

  const handleOnChangeAnswer = (event: FormEvent<HTMLTextAreaElement>) => {
    setAnswer(event.currentTarget.value);
  };

  const handleOnChangeQuestion = (event: FormEvent<HTMLTextAreaElement>) => {
    setQuestion(event.currentTarget.value);
  };

  const handleOnCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleOnClose();
  };

  useEffect(() => {
    resetAll();
  }, [isModalOpen]);

  return (
    <Modal closeOnOutsideClick={true} isOpen={isModalOpen} handleOnClose={handleOnClose}>
      <Container>
        <Headline title='Edytuj kartę' />
        <Form onSubmit={editQuestion}>
          <Row>
            <label htmlFor='question'>Przód: </label>
            <Textarea
              name='question'
              id='question'
              value={question}
              onChange={handleOnChangeQuestion}
            />
            <span>{validateQuestionMessage}</span>
          </Row>
          <Row>
            <StyledButton small as={Button} type='submit'>
              Aktualizuj
            </StyledButton>
          </Row>
        </Form>
        <Form onSubmit={editAnswer}>
          <Row>
            <label htmlFor='answer'>Tył: </label>
            <Textarea id='answer' name='answer' value={answer} onChange={handleOnChangeAnswer} />
            <span>{validateAnswerMessage}</span>
          </Row>
          <Row>
            <StyledButton small as={Button} type='submit'>
              Aktualizuj
            </StyledButton>
          </Row>
        </Form>
        <StyledButton as={Button} className='cancel' type='button' onClick={handleOnCloseModal}>
          Zamknij
        </StyledButton>
      </Container>
    </Modal>
  );
};

export default EditForm;
