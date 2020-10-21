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
      axios.get(usersUrl(props.id))
        .then(response => {
          setUsername(response.data.username);
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(e => console.error(e));
    }
  });

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
