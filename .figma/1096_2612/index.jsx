import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.group135}>
      <p className={styles.partnershipsReferral}>
        Partnerships
        <br />& Referrals
      </p>
      <p className={styles.jaspaCollaboratesWit}>
        Jaspa collaborates with Nigerian businesses through integration programs and
        strategic partnerships. Businesses can embed Jaspa’s services into their
        operations to expand their offerings and reach new customers.
        <br />
        <br />
        Existing Jaspa customers can also refer friends or businesses and earn
        rewards when their referrals sign up and start transacting.
      </p>
      <div className={styles.group23}>
        <p className={styles.referNowInTheApp}>Refer Now in the App</p>
        <img src="../image/mlisbe09-hdwkn2z.svg" className={styles.arrow1} />
      </div>
    </div>
  );
}

export default Component;
