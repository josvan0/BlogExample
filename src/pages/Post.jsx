import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Post.scss';
import UserLink from '../components/UserLink';
import Comments from '../components/Comments';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

function Post() {
  // react router hook to obtain url params
  const { postId } = useParams();
  // hooks
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(0);
  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(postsUrl(postId), {
      cancelToken: source.token
    })
      .then(response => {
        // response.data is the body JSON response
        setTitle(response.data.title);
        setContent(response.data.body);
        setUserId(response.data.userId);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });

    return () => {
      source.cancel('Post request cancelled');
    }
  }, [postId]); // <- runs again the hook if value changed

  return (
    <div className="post">
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
      <UserLink id={userId} />
      <Comments postId={postId} />
    </div>
  );
}

export default Post;
