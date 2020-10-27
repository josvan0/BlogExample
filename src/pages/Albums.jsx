import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import PreviewLink from '../components/PreviewLink';
import { albumsUrl } from '../helpers/jsonPlaceholderHelper';

function Albums() {
  const { path } = useRouteMatch();
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(albumsUrl(), {
      cancelToken: source.token
    })
      .then(response => {
        setAlbumList(response.data);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });
  }, []);

  const links = albumList.map(album => {
    return (
      <PreviewLink
        title={album.title}
        destiny={`${path}/${album.id}`} />
    );
  });

  return (
    <Switch>
      <Route
        exact
        path={path}>
        <div className="link-list">{links}</div>
      </Route>
      <Route
        path={`${path}/:albumId`} />
    </Switch>
  );
}

export default Albums;
