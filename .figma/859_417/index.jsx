import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.flexibleDigitalFirst3}>
      <span className={styles.flexibleDigitalFirst}>
        Flexible, digital-first business accounts for SMEs, cooperatives, and
        established companies.
        <br />
        <br />
      </span>
      <span className={styles.flexibleDigitalFirst2}>Features:</span>
      <span className={styles.flexibleDigitalFirst}>
        <br /> - Multi-layer structure for different business units
        <br /> - Payroll system built in (ready for 2026 tax reforms)
        <br /> - Free accounting dashboard (Xero integration available)
        <br /> - USSD & mobile app banking
        <br />
        <br />
      </span>
      <span className={styles.flexibleDigitalFirst2}>Ideal for:</span>
      <span className={styles.flexibleDigitalFirst}>
        &nbsp;SMEs, cooperatives, NGOs, and growing businesses.
      </span>
    </p>
  );
}

export default Component;
