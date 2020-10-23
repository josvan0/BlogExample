import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Comments.scss';
import Comment from './Comment';
import { commentsUrl } from '../helpers/jsonPlaceholderHelper';

function Comments(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(commentsUrl(props.postId), {
      cancelToken: source.token
    })
    .then(response => {
      setCommentList(response.data);
    })
    .catch(e => {
      if (axios.isCancel(e)) {
        console.log(e);
      } else {
        console.error(e);
      }
    });

    return () => {
      source.cancel('Comments request cancelled');
    }
  }, [props.postId]);

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
