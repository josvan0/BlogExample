import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Album.scss';
import UserLink from '../components/UserLink';
import Photo from '../components/Photo';
import { albumsUrl, photosUrl } from '../helpers/jsonPlaceholderHelper';

function Album() {
  const { albumId } = useParams();
  const [title, setTitle] = useState('Album');
  const [userId, setUserId] = useState(0);
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
        setUserId(response.data.userId);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          console.log(e);
        } else {
          console.error(e);
        }
      });
  }, [albumId]);

  const photos = photoList.map(photo => {
    return (
      <Photo
        key={photo.id}
        name={photo.title}
        thumb={photo.thumbnailUrl}
        url={photo.url} />
    );
  });

  return (
    <div className="album">
      <h2>{title}</h2>
      <UserLink id={userId} />
      <div className="gallery">{photos}</div>
    </div>
  );
}

export default Album;
