import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './Posts.scss';
import Post from './Post';
import PreviewPost from '../components/PreviewPost';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

function Posts() {
  // extract actual url path
  const { path } = useRouteMatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // generate token and cancel method
    const source = axios.CancelToken.source();
    // pass token to request for cancel
    axios.get(postsUrl(), {
      cancelToken: source.token
    })
      .then(response => {
        setPostList(response.data);
      })
      .catch(e => {
        // if error is an axios cancel
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });

    // method returned is executed to clean up subscriptions
    return () => {
      // call cancel to cancel request
      source.cancel('Posts request cancelled');
    }
  }, []); /* array contains vars whom depend hook
  if no vars setted would create perfomance problems like
  memory overconsume because hook make requests infinite times,
  to avoid this, pass an empty array as second param to took
  if don't have vars dependency */

  const posts = postList.map(post => {
    return (
      <PreviewPost
        key={post.id}
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
