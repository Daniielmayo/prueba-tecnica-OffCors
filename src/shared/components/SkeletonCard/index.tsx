import React from 'react';
import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeletonElement} ${styles.skeletonTitle}`}></div>
      <div className={`${styles.skeletonElement} ${styles.skeletonText}`}></div>
      <div className={`${styles.skeletonElement} ${styles.skeletonText}`}></div>
    </div>
  );
};

export default SkeletonCard;
