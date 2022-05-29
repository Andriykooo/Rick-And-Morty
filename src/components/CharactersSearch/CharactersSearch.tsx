import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';
import searchLoupe from '../../../public/images/loupe.png';

import styles from './charactersSearch.module.scss';

const CharactersSearch: FC = () => {
  const [searchField, setSearchField] = useState('');
  const router = useRouter();

  const onSearchHanlder = (query: string) => {
    if (searchField) {
      router.push(`/search/${query}`);
    }
  };
 
  return (
    <form
      className={styles.charactersSearch}
      onSubmit={(event) => {
        event.preventDefault();
        onSearchHanlder(searchField);
      }}
    >
      <label>
        <input
          className={styles.charactersSearch__input}
          type='text'
          placeholder='Search...'
          name='searchName'
          autoComplete='off'
          value={searchField}
          onChange={(event) => {
            setSearchField(event.target.value);
          }}
        />
      </label>

      <button type='submit' className={styles.charactersSearch__submit}>
        <Image src={searchLoupe} alt='search' height={25} width={25} />
      </button>
    </form>
  );
};

export default CharactersSearch;
