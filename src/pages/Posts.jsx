import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './Posts.scss';
import PreviewPost from '../components/PreviewPost';
import Post from './Post';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

function Posts() {
  // extract actual url path
  const { path } = useRouteMatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get(postsUrl())
      .then(response => {
        setPostList(response.data);
      })
      .catch(e => console.error(e));
  });

  const posts = postList.map(post => {
    return (
      <PreviewPost
        key={post.id}
        url={path}
        id={post.id}
        title={post.title}
        content={post.body} />
    );
  });

  return (
    <Switch>
      <Route
        exact
        path={path}>
        <div className="post-list">{posts}</div>
      </Route>
      <Route
        path={`${path}/:postId`}
        component={Post} />
    </Switch>
  );
}

export default Posts;
