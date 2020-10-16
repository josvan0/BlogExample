import React from 'react';
import { useParams } from 'react-router-dom';

import './Post.scss';

function Post() {
  const { postId } = useParams();
  return (
    <div>{postId}</div>
  );
}

export default Post;
