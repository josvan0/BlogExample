import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './User.scss';
import Address from '../components/Address';
import Albums from './Albums';
import Posts from './Posts';
import { usersUrl } from '../helpers/jsonPlaceholderHelper';

function User() {
  const { userId } = useParams();
  const [tabActiveIndex, setTabActiveIndex] = useState(0);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState({
    street: 'Unknown',
    suite: '',
    city: 'No city',
    zipcode: '---',
    geo: {
      lat: 0,
      lng: 0
    }
  });

  let tabContent = <span></span>;
  switch (tabActiveIndex) {
    case 0:
      tabContent = <Posts userId={userId} />
      break;
    case 1:
      tabContent = <Albums userId={userId} />
      break;
    default:
      tabContent = (
        <div></div>
      );
      break;
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(usersUrl(userId), {
      cancelToken: source.token
    })
      .then(response => {
        setName(response.data.name);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setWebsite(response.data.website);
        setAddress(response.data.address);
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
  }, [userId]);

  return (
    <div>
      <div className="user-data">
        <div className="username">
          <p className="name">{name}</p>
          <p className="nick"><i>({username})</i></p>
        </div>
        <div className="contact-info">
          <p className="email">{email}</p>
          <p className="phone"><i>Tel: {phone}</i></p>
          <p className="site">Website: <Link to={website}>{website}</Link></p>
        </div>
        <div className="address-info">
          <Address data={address} />
        </div>
      </div>
      <div className="tabs">
        <button
          className="tab-btn active"
          onClick={e => {
            e.currentTarget.parentElement.childNodes.forEach(element => {
              element.className = 'tab-btn';
            });
            e.currentTarget.classList.toggle('active');
            setTabActiveIndex(0);
          }}>
          Posts
            </button>
        <button
          className="tab-btn"
          onClick={e => {
            e.currentTarget.parentElement.childNodes.forEach(element => {
              element.className = 'tab-btn';
            });
            e.currentTarget.classList.toggle('active');
            setTabActiveIndex(1);
          }}>
          Albums
            </button>
      </div>
      <div className="tab-content">
        {tabContent}
      </div>
    </div>
  );
}

export default User;
