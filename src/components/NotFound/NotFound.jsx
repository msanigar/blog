import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.css';

const NotFound = () => (
  <div>
    <h2 className={styles.heading}><Link className={styles.link} to="/">What are you doing here?  You are not meant to be here.  Head back home.</Link></h2>
  </div>
);

export default NotFound;
