import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frameUssd}>
      <div className={styles.rectangle73}>
        <div className={styles.rectangle78}>
          <p className={styles.a3}>3</p>
        </div>
        <p className={styles.uSsdBanking}>USSD Banking</p>
      </div>
      <div className={styles.rectangle76}>
        <img
          src="../image/mliqi8b7-h3ic5p2.png"
          className={styles.cellphoneWithButtons}
        />
        <p className={styles.uSsdBanking2}>USSD Banking</p>
        <p className={styles.stayConnectedEvenWit}>
          Stay connected even without internet access. Dial *XXX# to transfer funds,
          check balances, and perform transactions easily from any mobile device.
        </p>
      </div>
    </div>
  );
}

export default Component;
