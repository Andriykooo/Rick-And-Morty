import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { CharacterSchema } from '../../api/Schemas/CharactersSchema';
import {
  addFavouriteCharacter,
  removeFavouriteCharacter,
} from './charactersList.actions';
import { getFavouriteCharactersIds } from './charactersList.selector';

import styles from './characters-list.module.scss';
import heart from '../../../public/images/heart.png';
import heartActive from '../../../public/images/heart_active.png';

interface CharactersProps {
  characters: CharacterSchema[];
}

const CharactersList: FC<CharactersProps> = ({ characters }) => {
  const favouriteCharactersIds = useSelector(getFavouriteCharactersIds);
  const dispatch = useDispatch();
  const preparedCharacters = Array.isArray(characters)
    ? characters
    : [characters];

  return (
    <div className={styles.charactersList}>
      <ul className={styles.charactersList__list}>
        {preparedCharacters?.map((character) => (
          <li key={character.id} className={styles.charactersList__item}>
            <Image
              className={styles.charactersList__image}
              src={character.image}
              alt={character.name}
              width={160}
              height={160}
            />
            <div className={styles.charactersList__content}>
              <Link href={`/character/${character.id}`}>
                <a className={styles.charactersList__name}>{character.name}</a>
              </Link>
              <p className={styles.charactersList__location}>
                <span className={styles.charactersList__location_title}>
                  Location:&nbsp;
                </span>
                <Link
                  href={`/location/${character.location.url.replace(
                    /\D+/g,
                    ''
                  )}`}
                >
                  <a className={styles.charactersList__link}>
                    {character.location.name}
                  </a>
                </Link>
              </p>
            </div>
            {!favouriteCharactersIds.includes(character.id) ? (
              <button
                type='button'
                className={styles.charactersList__button}
                onClick={() => {
                  if (!favouriteCharactersIds.includes(character.id)) {
                    dispatch(addFavouriteCharacter(character.id));
                  }
                }}
              >
                <Image src={heart} alt='heart' width={40} height={40} />
              </button>
            ) : (
              <button
                type='button'
                className={styles.charactersList__button}
                onClick={() => {
                  dispatch(removeFavouriteCharacter(character.id));
                }}
              >
                <Image
                  src={heartActive}
                  alt='heart-active'
                  width={40}
                  height={40}
                />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
