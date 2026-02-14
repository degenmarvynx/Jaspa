import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.framePos}>
      <div className={styles.rectangle75}>
        <div className={styles.rectangle78}>
          <p className={styles.a5}>5</p>
        </div>
        <p className={styles.pOsSystem}>POS System</p>
      </div>
      <div className={styles.rectangle76}>
        <img
          src="../image/mliqig9h-cmvwtr9.png"
          className={styles.pOsPaymentBlueWithou}
        />
        <p className={styles.pOsSystem2}>POS System</p>
        <p className={styles.powerYourBusinessWit}>
          Power your business with Jaspa POS solutions. Accept card and mobile
          payments effortlessly, track transactions, and enjoy prompt settlements —
          anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

export default Component;
