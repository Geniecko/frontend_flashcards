import { FC, FormEvent, useContext, useState } from 'react';
import { Button } from '../../components/Button/Button.style';
import Headline from '../../components/Headline/Headline';
import Modal from '../../components/Modal/Modal';
import { Textarea } from '../../components/Textarea/Textarea.style';
import { StoreContext } from '../../store/StoreContext';
import { Flashcard, FlashcardsData } from '../../store/types';
import ContainerTemplate from '../../templates/ContainerTemplate';
import {
  Form,
  FormContainer,
  FormRow,
  SuccesPopup,
  ValidateMessage,
} from './AddFlashcardView.style';

const AddFlashcardView: FC = () => {
  const context = useContext(StoreContext);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [validateMessage, setValidateMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnChangeQuestion = (event: FormEvent<HTMLTextAreaElement>) =>
    setQuestion(event.currentTarget.value);

  const handleOnChangeAnswer = (event: FormEvent<HTMLTextAreaElement>) =>
    setAnswer(event.currentTarget.value);

  const uniqueId = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  };

  const resetAll = () => {
    setQuestion('');
    setAnswer('');
    setValidateMessage('');
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      question.length < 10 ||
      question.length > 200 ||
      answer.length < 10 ||
      answer.length > 400
    ) {
      setValidateMessage('Wypełnij poprawnie pola zgodnie z instrukcją powyżej.');
    } else {
      const flashcardObject = {
        question,
        answer,
        author: context?.user?.login,
        id: Number(uniqueId()),
      } as Flashcard;

      const flashcardsArray: FlashcardsData | any = context?.flashcards;

      flashcardsArray.push(flashcardObject);

      context?.setFlashcards(flashcardsArray);

      resetAll();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <ContainerTemplate secondary>
        <Headline
          title='Dodaj nową karte'
          subtitle='Tutaj możesz dodać nową kartę. Przód karty powiniem być dłuższy niż 10 znaków i krótszy niż 200. Tył karty powinien być dłuższy niż 10 znaków i krótszy niż 400.'
        />
      </ContainerTemplate>
      <ContainerTemplate secondary>
        <FormContainer>
          <Form onSubmit={handleOnSubmit}>
            <FormRow>
              <label>Przód (Pytanie):</label>
              <Textarea value={question} onChange={handleOnChangeQuestion} />
            </FormRow>
            <FormRow>
              <label>Tył (Odpowiedź):</label>
              <Textarea value={answer} onChange={handleOnChangeAnswer} />
            </FormRow>
            <FormRow>
              {validateMessage && <ValidateMessage>{validateMessage}</ValidateMessage>}
              <Button type='submit'>Dodaj</Button>
            </FormRow>
          </Form>
        </FormContainer>
      </ContainerTemplate>
      <Modal isOpen={isModalOpen} handleOnClose={handleOnClose} closeOnOutsideClick>
        <SuccesPopup>
          <Headline
            title='Brawo! Dodałeś nową fiszke'
            subtitle='Możesz zamknąc okno i dodać kolejną'
          />
          <Button onClick={handleOnClose}>Zamknij</Button>
        </SuccesPopup>
      </Modal>
    </>
  );
};

export default AddFlashcardView;
