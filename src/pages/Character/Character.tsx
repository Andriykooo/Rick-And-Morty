import React, { FC } from 'react';
import Image from 'next/image';

import { CharacterSchema } from '../../api/Schemas/CharactersSchema';

import BaseLayout from '../../layouts/BaseLayout';
import styles from './character.module.scss';

interface CharacterProps {
  character: CharacterSchema;
}

const Character: FC<CharacterProps> = ({ character }) => (
  <BaseLayout>
    <Image
      className={styles.character__image}
      src={character.image}
      alt={character.name}
      width={250}
      height={250}
      layout='responsive'
    />
    <ul className={styles.character__list}>
      <li className={styles.character__item}>
        <span className={styles.character__item_title}>Name:</span>{' '}
        {character.name}
      </li>
      <li className={styles.character__item}>
        <span className={styles.character__item_title}>Gender:</span>{' '}
        {character.gender}
      </li>
      <li className={styles.character__item}>
        <span className={styles.character__item_title}>Species:</span>{' '}
        {character.species}
      </li>
      <li
        className={
          styles.character__item || character.status === 'Alive'
            ? styles.character__item_alive
            : styles.character__item_dead
        }
      >
        <span className={styles.character__item_title}>Status:</span>{' '}
        {character.status}
      </li>
    </ul>
  </BaseLayout>
);

export default Character;
