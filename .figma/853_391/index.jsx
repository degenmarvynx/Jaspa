import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.saveYourMoneySafelyA3}>
      <span className={styles.saveYourMoneySafelyA}>
        Save your money safely and earn interest without the hassle of hidden fees.
        Jaspa’s savings accounts are designed to help you reach your goals, your
        way.
        <br />
        <br />
      </span>
      <span className={styles.saveYourMoneySafelyA2}>Features:</span>
      <span className={styles.saveYourMoneySafelyA}>
        <br /> - Locked savings to encourage discipline
        <br /> - Flexible accounts for emergency access
        <br /> - Competitive interest rates
        <br /> - Accessible through mobile, USSD, and web app
        <br />
        <br />
      </span>
      <span className={styles.saveYourMoneySafelyA2}>Ideal for:</span>
      <span className={styles.saveYourMoneySafelyA}>
        &nbsp;Salary earners, freelancers, families, and students.
      </span>
    </p>
  );
}

export default Component;
