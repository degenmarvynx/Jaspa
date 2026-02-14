import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.union}>
      <div className={styles.autoWrapper}>
        <p className={styles.a60}>60</p>
        <p className={styles.startupsFunded}>Startups Funded</p>
      </div>
      <div className={styles.line11} />
      <div className={styles.autoWrapper2}>
        <p className={styles.a60}>80%</p>
        <p className={styles.startupsFunded}>Survival Rate</p>
      </div>
      <div className={styles.line12} />
      <div className={styles.autoWrapper3}>
        <p className={styles.a60}>20</p>
        <p className={styles.startupsFunded}>Mentors</p>
      </div>
    </div>
  );
}

export default Component;
