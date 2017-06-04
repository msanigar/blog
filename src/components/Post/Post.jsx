import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Post.css';

const Post = props => (
  <div>
    <h2 className={styles.title}>
      <Link className={styles.link} to={`/post/${props.slug}`}>{props.title}</Link>
    </h2>
    <p className={styles.content}>{props.excerpt}</p>
  </div>
);

Post.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
};

export default Post;
