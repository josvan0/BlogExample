import React from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './Posts.scss';
import PreviewPost from '../components/PreviewPost';
import Post from './Post';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

function Routes(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route
        path={path}
        exact>
        <div className="post-list">
          {props.postList}
        </div>
      </Route>
      <Route
        path={`${path}/:postId`}
        component={Post} />
    </Switch>
  );
}

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(postsUrl())
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <PreviewPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.body} />
      );
    });
    const postList = (
      <div className="post-list">
        {posts}
      </div>
    );

    return (
      <Routes postList={postList} />
    );
  }
}

export default Posts;
