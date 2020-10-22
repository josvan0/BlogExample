import React from 'react';
import { useHistory } from 'react-router-dom';

import './PageNotFound.scss';

function PageNotFound() {
  // destructure object history privided by hook
  // goBack function redirect user to last path visited
  const { goBack } = useHistory();

  return (
    <div className="not-found">
      <h2 className="emoticon">:(</h2>
      <p>Sorry, we can't find the page that you are looking for.</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default PageNotFound;
