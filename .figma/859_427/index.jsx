import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.acceptPaymentsAnywhe3}>
      <span className={styles.acceptPaymentsAnywhe}>
        Accept payments anywhere with Jaspa POS terminals and our upcoming QR code
        payment system.
        <br />
        <br />
      </span>
      <span className={styles.acceptPaymentsAnywhe2}>Features:</span>
      <span className={styles.acceptPaymentsAnywhe}>
        <br /> - Secure, real-time transactions
        <br /> - International card support
        <br /> - QR Code for contactless payments (coming soon)
        <br /> - Settlement within minutes
        <br />
        <br />
      </span>
      <span className={styles.acceptPaymentsAnywhe2}>Ideal for:</span>
      <span className={styles.acceptPaymentsAnywhe}>
        &nbsp;Merchants, supermarkets, restaurants, service providers.
      </span>
    </p>
  );
}

export default Component;
