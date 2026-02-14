import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle50}>
      <img
        src="../image/mlb0afpt-ldsyn7g.png"
        className={styles.mobileBankingPhoneBl}
      />
      <p className={styles.digitalBanking}>Digital Banking</p>
      <p className={styles.fullMobileAccessAnyw}>
        Full mobile access, anywhere, anytime.
      </p>
    </div>
  );
}

export default Component;
