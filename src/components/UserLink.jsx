import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './UserLink.scss';
import { usersUrl } from '../helpers/jsonPlaceholderHelper';

function UserLink(props) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (props.id !== 0) {
      const source = axios.CancelToken.source();
      axios.get(usersUrl(props.id), {
        cancelToken: source.token
      })
        .then(response => {
          setUsername(response.data.username);
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(e => {
          if (axios.isCancel(e)) {
            console.log(e);
          } else {
            console.error(e);
          }
        });

      return () => {
        source.cancel('User request cancelled');
      }
    }
  }, [props.id]);

  return (
    <div className="user-link">
      <div className="dialog">
        <b>{name}</b>
        <i>{email}</i>
      </div>
      <p>By: <Link to={`/users/${props.id}`}>{username}</Link></p>
    </div>
  );
}

export default UserLink;
