import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

import {
  getFavouriteCharactersIds,
  getFavouriteCharacters,
} from '../../components/CharactersList/charactersList.selector';
import { triggerFavouriteCharacters } from '../../components/CharactersList/charactersList.actions';
import CharactersList from '../../components/CharactersList';

import styles from './characters-favourite.module.scss';

const Favourite: FC = () => {
  const dispatch = useDispatch();
  const favouriteCharactersIds = useSelector(getFavouriteCharactersIds);
  const favouriteCharacters = useSelector(getFavouriteCharacters);

  useEffect(() => {
    dispatch(triggerFavouriteCharacters(favouriteCharactersIds));
  }, [favouriteCharactersIds, dispatch]);

  return (
    <div className={styles.charactersFavourite}>
      <Link href='/'>
        <a className={styles.charactersFavourite__button}>Home</a>
      </Link>
      {favouriteCharactersIds.length === 0 ? (
        <h1>No characters selected!</h1>
      ) : (
        <CharactersList characters={favouriteCharacters} />
      )}
    </div>
  );
};

export default Favourite;
