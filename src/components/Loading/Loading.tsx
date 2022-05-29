import React, { FC } from 'react';
import Loader from 'react-loader-spinner';
import styles from './loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={styles.loading}>
      <Loader type='Puff' color='#FFFFFF' height={200} width={200} />
    </div>
  );
};

export default Loading;
