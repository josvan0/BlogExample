import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Comments.scss';
import Comment from './Comment';
import { commentsUrl } from '../helpers/jsonPlaceholderHelper';

function Comments(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get(commentsUrl(props.postId))
    .then(response => {
      setCommentList(response.data.slice(0, 5));
    })
    .catch(e => console.error(e));
  });

  const commentaries = commentList.map(comment => (
    <Comment
      key={comment.id}
      title={comment.name}
      author={comment.email}
      content={comment.body} />
  ));

  return (
    <div className="comments">
      <h3>Comments</h3>
      <hr />
      <div className="comment-list">{commentaries}</div>
      <Link to={`${props.url}/comments`}>All</Link>
    </div>
  );
}

export default Comments;
