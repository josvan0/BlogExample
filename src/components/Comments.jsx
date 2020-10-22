import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Comments.scss';
import Comment from './Comment';
import { commentsUrl } from '../helpers/jsonPlaceholderHelper';

function Comments(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get(commentsUrl(props.postId))
    .then(response => {
      setCommentList(response.data);
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
    </div>
  );
}

export default Comments;
