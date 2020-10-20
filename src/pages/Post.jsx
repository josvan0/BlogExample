import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Post.scss';
import UserLink from '../components/UserLink';
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
    axios.get(postsUrl(postId))
      .then(response => {
        // response.data is the body JSON response
        setTitle(response.data.title);
        setContent(response.data.body);
        setUserId(response.data.userId);
      })
      .catch(e => console.error(e));
  });

  return (
    <div className="post">
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
      <UserLink id={userId} />
      {/* falta componente para el usuario y los comentarios */}
    </div>
  );
}

export default Post;
