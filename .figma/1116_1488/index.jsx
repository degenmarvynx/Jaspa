import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame230}>
      <div className={styles.rectangle175}>
        <p className={styles.youthSmeEmpowerment}>
          Youth & SME
          <br />
          Empowerment
        </p>
        <p className={styles.providingAccessToBus}>
          Providing access to business advisory, startup acceleration, and capacity
          development for young entrepreneurs.
        </p>
      </div>
      <div className={styles.rectangle1752}>
        <p className={styles.financialInclusion}>
          Financial
          <br />
          Inclusion
        </p>
        <p className={styles.bringingReliableAffo}>
          Bringing reliable, affordable banking tools to individuals and
          micro-businesses in underserved areas across Nigeria.
        </p>
      </div>
      <div className={styles.rectangle1753}>
        <p className={styles.communityImpactIniti}>
          Community
          <br />
          Impact
          <br />
          Initiatives
        </p>
        <p className={styles.bringingReliableAffo}>
          Supporting education, health outreach, and community development programs
          that improve quality of life.
        </p>
      </div>
    </div>
  );
}

export default Component;
