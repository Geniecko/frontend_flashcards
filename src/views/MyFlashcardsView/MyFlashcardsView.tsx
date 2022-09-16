import { FC, useContext } from 'react';
import FlashcardsList from '../../components/FlashcardsList/FlashcardsList';
import Headline from '../../components/Headline/Headline';
import { StoreContext } from '../../store/StoreContext';
import ContainerTemplate from '../../templates/ContainerTemplate';

const MyFlashcardsView: FC = () => {
  const context = useContext(StoreContext);
  const userFlashcards = context?.flashcards.filter(
    (flashcard) => flashcard.author === context.user?.login,
  );

  return (
    <>
      <ContainerTemplate secondary>
        <Headline
          title='Twoje fiszki'
          subtitle='Tutaj znajdują się wszystkie karty stworzone przez Ciebie. Możesz je usuwać lub edytować.'
        />
      </ContainerTemplate>
      <ContainerTemplate secondary>
        {userFlashcards && <FlashcardsList flashcards={userFlashcards} isUserCard />}
      </ContainerTemplate>
    </>
  );
};

export default MyFlashcardsView;
