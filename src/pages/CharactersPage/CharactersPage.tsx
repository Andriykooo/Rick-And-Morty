import React, { FC } from 'react';
import Link from 'next/dist/client/link';

import CharactersList from '../../components/CharactersList';
import CharactersPagination from '../../components/CharactersPagination';

import { CharactersPageInfoSchema } from '../../api/Schemas/CharactersPageInfoSchema';
import { CharacterSchema } from '../../api/Schemas/CharactersSchema';

import styles from './character-page.module.scss';

interface CharacterPageProps {
  characters: CharacterSchema[];
  pagesInfo: CharactersPageInfoSchema;
}

const CharactersPage: FC<CharacterPageProps> = ({ characters, pagesInfo }) => {
  return (
    <div className={styles.characterPage}>
      <div className={styles.characterPage__nav}>
        <Link href='/favourite'>
          <a className={styles.characterPage__button}>Favourite</a>
        </Link>
        <Link href='/'>
          <a className={styles.characterPage__button}>Home</a>
        </Link>
      </div>

      <CharactersList characters={characters} />
      <CharactersPagination pagesInfo={pagesInfo} />
    </div>
  );
};

export default CharactersPage;
