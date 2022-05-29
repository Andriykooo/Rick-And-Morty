import React from 'react';
import styles from './base-layout.module.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BaseLayout;
