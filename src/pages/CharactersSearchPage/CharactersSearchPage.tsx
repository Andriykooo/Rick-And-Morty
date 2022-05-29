import React, { FC, useState } from 'react';
import Link from 'next/dist/client/link';

import CharactersList from '../../components/CharactersList';
import CharactersFilter from '../../components/CharactersFilter';

import { CharacterSchema } from '../../api/Schemas/CharactersSchema';
import { SortMethods } from '../../components/CharactersFilter/CharactersFilter';

import styles from './charactersSearchPage.module.scss';

interface CharactersSearchPageProps {
  preparedCharacters: PreparedCharacters;
}

type PreparedCharacters = {
  characters: CharacterSchema[];
  notFoundedCharacters: string[];
};

const CharactersSearchPage: FC<CharactersSearchPageProps> = ({
  preparedCharacters: { characters, notFoundedCharacters },
}) => {
  const [filteredCharacters, setFilteredCharacters] = useState([...characters]);
  const sort = {
    [SortMethods.SORT_BY_ASC]: (
      preparedCharacters: CharacterSchema[]
    ): CharacterSchema[] => {
      return preparedCharacters.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    },
    [SortMethods.SORT_BY_DESC]: (
      preparedCharacters: CharacterSchema[]
    ): CharacterSchema[] => {
      return preparedCharacters
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
        .reverse();
    },
  };

  const filterCharactersBy = (sortBy: SortMethods) => {
    setFilteredCharacters(sort[sortBy]([...characters]));
  };

  return (
    <div className={styles.CharactersSearchPage}>
      <div className={styles.CharactersSearchPage__nav}>
        <CharactersFilter filterCharactersBy={filterCharactersBy} />
        <Link href='/favourite'>
          <a className={styles.CharactersSearchPage__button}>Favourite</a>
        </Link>
        <Link href='/'>
          <a className={styles.CharactersSearchPage__button}>Home</a>
        </Link>
      </div>

      {notFoundedCharacters.length !== 0 && (
        <>
          <h2>No founded characters:</h2>
          <ul>
            {notFoundedCharacters.map((character, index) => (
              <li key={index + 1}>{character}</li>
            ))}
          </ul>
        </>
      )}

      <CharactersList characters={filteredCharacters} />
    </div>
  );
};

export default CharactersSearchPage;
