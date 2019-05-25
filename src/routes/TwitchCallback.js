import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TwitchCallback() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    axios({ method: 'post', url: '/login', data: { code } })
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers['Authorization'] = `Bearer ${response.data}`;
        setToken(axios.defaults.headers['Authorization'])
      });
  }, [])

  return (
    <div>
      <h2>TwitchCallback</h2>
      {token && <Link to='/dashboard'>Dashboard</Link>}
    </div>
  )
}