import React, { FC } from 'react';
import Link from 'next/link';

import styles from './characters-pagination.module.scss';
import { CharactersPageInfoSchema } from '../../api/Schemas/CharactersPageInfoSchema';
import { useRouter } from 'next/router';

interface CharactersPaginationProps {
  pagesInfo?: CharactersPageInfoSchema;
}

const CharactersPagination: FC<CharactersPaginationProps> = ({
  pagesInfo: { pages },
}) => {
  const router = useRouter();
  const currentPage = +router.query.page;
  const prevLink = currentPage === 2 ? `/` : `/page/${currentPage - 1}`;
  const nextLink =
    router.pathname === '/' ? `/page/2` : `/page/${currentPage + 1}`;

  return (
    <div className={styles.charactersPagination__pagination}>
      {router.pathname !== '/' && (
        <Link href={prevLink}>
          <a className={styles.charactersPagination__button}>Prev</a>
        </Link>
      )}
      {currentPage !== pages && (
        <Link href={nextLink}>
          <a className={styles.charactersPagination__button}>Next</a>
        </Link>
      )}
    </div>
  );
};

export default CharactersPagination;
