import React from 'react';

import styles from './About.css';

const About = () => (
  <div>
    <h2 className={styles.heading}><a className={styles.link} href="someOtherOtherLink">About page</a></h2>
    <p className={styles.bio}>This is some jazz about me... </p>
  </div>
);

export default About;
