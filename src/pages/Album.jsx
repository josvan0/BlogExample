import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Album.scss';
import { albumsUrl, photosUrl } from '../helpers/jsonPlaceholderHelper';

function Album() {
  const { albumId } = useParams();
  const [title, setTitle] = useState('Album');
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(photosUrl(albumId), {
      cancelToken: source.token
    })
      .then(response => {
        setPhotoList(response.data);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });

    axios.get(albumsUrl(albumId), {
      cancelToken: source.token
    })
      .then(response => {
        setTitle(response.data.title);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });
  }, [albumId]);

  const photos = photoList.map(photo => <p>a</p>);
  return (
    <div className="album">
      <h2>{title}</h2>
      <div className="gallery">{photos}</div>
    </div>
  );
}

export default Album;
