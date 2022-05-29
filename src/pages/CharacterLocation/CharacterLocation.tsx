import React, { FC } from 'react';
import { CharacterLocationSchema } from '../../api/Schemas/CharacterLocationSchema';

import styles from './character-location.module.scss';
import BaseLayout from '../../layouts/BaseLayout';

interface LocationProps {
  location: CharacterLocationSchema;
}

const CharacterLocation: FC<LocationProps> = ({ location }) => (
  <BaseLayout>
    <ul className={styles.characterLocation__list}>
      <li className={styles.characterLocation__item}>
        <span className={styles.characterLocation__item_title}>Dimension:</span>{' '}
        {location.dimension}
      </li>
      <li className={styles.characterLocation__item}>
        <span className={styles.characterLocation__item_title}>Name:</span>{' '}
        {location.name}
      </li>
      <li className={styles.characterLocation__item}>
        <span className={styles.characterLocation__item_title}>Type:</span>{' '}
        {location.type}
      </li>
    </ul>
  </BaseLayout>
);

export default CharacterLocation;
