import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.homePageHeader}>
      <div className={styles.groupJaspaLogo}>
        <img
          src="../image/mljz29kx-gor94jz.png"
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
      <p className={styles.contactUs}>Contact Us</p>
    </div>
  );
}

export default Component;
