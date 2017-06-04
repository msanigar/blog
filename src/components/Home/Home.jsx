import React from 'react';

import Post from '../Post/Post';

import data from '../../../blog-posts.json';

const Home = () => (
  <div>
    { data.posts.map(post => <Post key={post.slug} {...post} />) }
  </div>
);

export default Home;
