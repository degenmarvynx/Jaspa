import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.peopleReachedThrough4}>
      <span className={styles.peopleReachedThrough}>
        People Reached Through Financial Literacy
        <br />
      </span>
      <span className={styles.peopleReachedThrough2}>
        <br />
      </span>
      <span className={styles.peopleReachedThrough3}>
        Delivering practical financial education through workshops and community
        programs.
      </span>
    </p>
  );
}

export default Component;
