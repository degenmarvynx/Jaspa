import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.downloadNowPage}>
      <div className={styles.homePageHeader}>
        <div className={styles.groupJaspaLogo}>
          <img
            src="../image/mlk0acny-optpi30.png"
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
      <div className={styles.rectangle83}>
        <div className={styles.autoWrapper3}>
          <p className={styles.downloadTheAppNowToG}>
            Download
            <br />
            the app now
            <br />
            to get started
          </p>
          <div className={styles.autoWrapper2}>
            <div className={styles.autoWrapper}>
              <div className={styles.downloadPlayStoreJas} />
              <div className={styles.downloadAppStoreJasp} />
            </div>
            <div className={styles.jaspaPlayStoreQrWhit} />
          </div>
        </div>
        <img src="../image/mlk0acnu-o0cuijg.png" className={styles.finale1} />
      </div>
    </div>
  );
}

export default Component;
