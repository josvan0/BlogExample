import React from 'react';

import './Photo.scss';

function Photo(props) {
  return (
    <div className="photo">
      <div>
        <img
          src={props.thumb}
          alt={`${props.name}-thumbnail`}
          onClick={() => {
            window.location = props.url;
          }} />
      </div>
    </div>
  );
}

export default Photo;
