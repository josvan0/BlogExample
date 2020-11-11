import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Post from './Post';
import PreviewLink from '../components/PreviewLink';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

function Posts(props) {
  // extract actual url path
  const { path } = useRouteMatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // generate token and cancel method
    const source = axios.CancelToken.source();
    // if pass an undefined and if the param has default value, takes the default
    const url = postsUrl(undefined, props.userId);
    // pass token to request for cancel
    axios.get(url, {
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
  }, [props.userId]); /* array contains vars whom depend hook
  if no vars setted would create perfomance problems like
  memory overconsume because hook make requests infinite times,
  to avoid this, pass an empty array as second param to took
  if don't have vars dependency */

  const posts = postList.map(post => {
    return (
      <PreviewLink
        key={post.id}
        title={post.title}
        content={post.body}
        destiny={`/posts/${post.id}`} />
    );
  });

  return (
    <Switch>
      <Route
        exact
        path={path}>
        <div className="link-list">{posts}</div>
      </Route>
      <Route
        path={`${path}/:postId`}
        component={Post} />
    </Switch>
  );
}

export default Posts;
