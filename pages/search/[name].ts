import { loadData } from '../../src/api/Characters/CharactersReposittory';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import CharactersSearchPage from '../../src/pages/CharactersSearchPage/CharactersSearchPage';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const name = context.params.name;
  
  if (typeof name !== 'string') {
    return {
      notFound: true
    }
  }
  
  const charactersQuery = name.split(',');

  try {
    const charactersData = await Promise.allSettled(charactersQuery.map(characterName => loadData.getCharactersByName(characterName)));

    const preparedCharacters = charactersData.reduce((accum, result, index) => {
      if (result.status === 'fulfilled') {
        return {...accum, characters: [...accum.characters, ...result.value] };
      }
      accum.notFoundedCharacters.push(charactersQuery[index]);

      return accum;
    }, { characters: [], notFoundedCharacters: []});

    return { props: { preparedCharacters } };
  } catch (error) {
    return {
      notFound: true
    }
  }
};

export default CharactersSearchPage;
