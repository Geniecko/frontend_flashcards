import { FC, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import FlashcardsList from '../../components/FlashcardsList/FlashcardsList';
import Headline from '../../components/Headline/Headline';
import ContainerTemplate from '../../templates/ContainerTemplate';

const FlashcardsView: FC = () => {
  const context = useContext(StoreContext);

  return (
    <>
      <ContainerTemplate secondary>
        <Headline title='Wszystkie fiszki' subtitle='Tutaj znajdują się wszystkie fiszki naszych użytkowników.' />
      </ContainerTemplate>
      <ContainerTemplate secondary>
        {context?.flashcards && <FlashcardsList flashcards={context.flashcards} />}
      </ContainerTemplate>
    </>
  );
};

export default FlashcardsView;
