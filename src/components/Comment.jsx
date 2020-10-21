import React from 'react';

import './Comment.scss';

function Comment(props) {
  return (
    <div className="comment">
      <h4>{props.title}</h4>
      <cite>{props.author}</cite>
      <p>{props.content}</p>
    </div>
  );
}

export default Comment;
