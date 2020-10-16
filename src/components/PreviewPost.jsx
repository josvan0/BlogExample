import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './PreviewPost.scss';

function PreviewPost(props) {
  const { url } = useRouteMatch();
  const content = props.content.length > 50 ? `${props.content.substring(0, 50)}...` : props.content;

  return (
    <div className="preview-post">
      <h3>{props.title}</h3>
      <p>{content}</p>
      <Link to={`${url}/${props.id}`}>See</Link>
    </div>
  );
}

export default PreviewPost;
