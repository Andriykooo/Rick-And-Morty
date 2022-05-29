import { loadData } from '../../src/api/Characters/CharactersReposittory';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';

import Character from '../../src/pages/Character/Character';

export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await loadData.getAllCharacters();
  const paths = characters.map((character) => {
    return {
      params: { characterId: character.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    const characterId = context.params.characterId;
    const character = await loadData.getCharacterInfo(+characterId);

    return {
      props: { character },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Character;
