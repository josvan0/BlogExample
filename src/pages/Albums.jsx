import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Album from './Album';
import PreviewLink from '../components/PreviewLink';
import { albumsUrl } from '../helpers/jsonPlaceholderHelper';

function Albums(props) {
  const { path } = useRouteMatch();
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = albumsUrl(undefined, props.userId);
    axios.get(url, {
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

    return () => {
      source.cancel('Albums request cancelled')
    }
  }, [props.userId]);

  const links = albumList.map(album => {
    return (
      <PreviewLink
        key={album.id}
        title={album.title}
        destiny={`/albums/${album.id}`} />
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
        path={`${path}/:albumId`}
        component={Album} />
    </Switch>
  );
}

export default Albums;
