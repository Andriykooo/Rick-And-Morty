import { loadData } from '../../src/api/Characters/CharactersReposittory';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import CharacterPage from '../../src/pages/CharactersPage/CharactersPage';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    if (!context.query.page) {
      return {
        notFound: true,
      };
    }

    const characters = await loadData.getPageOfCharacters(+context.query.page);
    const pagesInfo = await loadData.getCharacterPageInfo();

    if (!characters) {
      return {
        notFound: true,
      };
    }

    return { props: { characters, pagesInfo } };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default CharacterPage;
