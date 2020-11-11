import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PreviewLink.scss';

function PreviewLink(props) {
  let content = null;
  if (props.content) {
    content = props.content.length > 50 ? `${props.content.substring(0, 50)}...` : props.content;
  }
  return (
    <div className="preview-link">
      <h3>{props.title}</h3>
      { content && <p>{content}</p>}
      <Link to={props.destiny ?? '/'}>See</Link>
    </div>
  );
}
PreviewLink.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  destiny: PropTypes.string
};

export default PreviewLink;
