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
        <Headline title='All flashcards' subtitle='Here are all the flashcards of our users' />
      </ContainerTemplate>
      <ContainerTemplate>
        {context?.flashcards && <FlashcardsList flashcards={context.flashcards} />}
      </ContainerTemplate>
    </>
  );
};

export default FlashcardsView;
