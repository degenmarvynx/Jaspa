import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frameMobile}>
      <div className={styles.rectangle72}>
        <div className={styles.rectangle78}>
          <p className={styles.a2}>2</p>
        </div>
        <p className={styles.mobileBanking}>Mobile Banking</p>
      </div>
      <div className={styles.rectangle76}>
        <img
          src="../image/mliqi1fk-z4hjaf4.png"
          className={styles.mobileBankingPhoneBl}
        />
        <p className={styles.mobileBanking2}>Mobile Banking</p>
        <p className={styles.takeYourBankWithYouW}>
          Take your bank with you wherever you go. The Jaspa Mobile App lets you
          send money, pay bills, and manage your finances in real time — all from
          your smartphone.
        </p>
      </div>
    </div>
  );
}

export default Component;
