import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.jaspaLetsYouCreateMu3}>
      <span className={styles.jaspaLetsYouCreateMu}>
        Jaspa lets you create multiple accounts under one profile — so you can
        separate your business, savings, and expenses without using multiple banks.
        <br />
        <br />
      </span>
      <span className={styles.jaspaLetsYouCreateMu2}>Features:</span>
      <span className={styles.jaspaLetsYouCreateMu}>
        <br /> - Multiple account names & numbers under one login
        <br /> - Easily track income, savings & expenses
        <br /> - No need to open accounts in different banks
        <br /> - Accounting system included
        <br />
        <br />
      </span>
      <span className={styles.jaspaLetsYouCreateMu2}>Ideal for:</span>
      <span className={styles.jaspaLetsYouCreateMu}>
        &nbsp;Entrepreneurs, freelancers, small business owners.
      </span>
    </p>
  );
}

export default Component;
