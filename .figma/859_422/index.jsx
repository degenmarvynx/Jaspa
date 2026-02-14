import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.growFasterWithJaspaS3}>
      <span className={styles.growFasterWithJaspaS}>
        Grow faster with Jaspa’s tailored credit solutions for Nigerian businesses.
        <br />
        <br />
      </span>
      <span className={styles.growFasterWithJaspaS2}>Features:</span>
      <span className={styles.growFasterWithJaspaS}>
        <br /> - SME loans with flexible terms
        <br /> - Fast approval process
        <br /> - Transparent interest rates
        <br /> - Dedicated relationship managers
        <br />
        <br />
      </span>
      <span className={styles.growFasterWithJaspaS2}>Ideal for:</span>
      <span className={styles.growFasterWithJaspaS}>
        &nbsp;Startups, SMEs, traders, service providers.
      </span>
    </p>
  );
}

export default Component;
