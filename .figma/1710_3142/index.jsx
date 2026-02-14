import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.homePageHeader}>
      <div className={styles.groupJaspaLogo}>
        <img
          src="../image/mlk0bbau-gjf9x80.png"
          className={styles.jaspaLogoWithourBack}
        />
        <p className={styles.bankSmartLiveFree}>Bank Smart. Live Free.</p>
      </div>
      <div className={styles.rectangle2}>
        <p className={styles.personal}>Personal</p>
      </div>
      <div className={styles.rectangle3}>
        <p className={styles.business}>Business</p>
      </div>
      <p className={styles.aboutUs}>About Us</p>
      <p className={styles.productsServices}>Products & Services</p>
      <p className={styles.productsServices}>Resources</p>
      <p className={styles.productsServices}>Contact Us</p>
    </div>
  );
}

export default Component;
