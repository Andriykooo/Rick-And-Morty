import React, { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './charactersFilter.module.scss';

interface CharactersFilterProps {
  filterCharactersBy(firstArg: string): void;
}

export enum SortMethods {
  SORT_BY_ASC = 'sortByAsc',
  SORT_BY_DESC = 'sortByDesc',
}

const CharactersFilter: FC<CharactersFilterProps> = ({
  filterCharactersBy,
}) => {
  const [selectIsActive, setSelectActive] = useState(false);

  return (
    <div className={styles.cahractersFilter}>
      <button
        className={`${styles.cahractersFilter__button} ${
          (selectIsActive && styles.cahractersFilter__button_active) ||
          styles.cahractersFilter__button_clicked
        }`}
        type='button'
        onClick={() => setSelectActive(!selectIsActive)}
      >
        Sort characters:
      </button>

      <div
        className={`${styles.cahractersFilter__select} ${
          selectIsActive && styles.cahractersFilter__select_clicked
        }`}
      >
        <button
          className={`${styles.cahractersFilter__button} ${styles.cahractersFilter__select_button}`}
          type='button'
          onClick={() => filterCharactersBy(SortMethods.SORT_BY_ASC)}
        >
          Sort by ASC
        </button>
        <button
          className={`${styles.cahractersFilter__button} ${styles.cahractersFilter__select_button}`}
          type='button'
          onClick={() => filterCharactersBy(SortMethods.SORT_BY_DESC)}
        >
          Sort by DESC
        </button>
      </div>
    </div>
  );
};

export default CharactersFilter;
