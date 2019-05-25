import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [twitchUrl, setTwitchUrl] = useState(null);

  useEffect(() => {
    axios({ url: '/login/twitch-link'})
      .then((response) => {
        setTwitchUrl(response.data.url);
      });
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <Link to='/twitch-callback'>TwitchCallback</Link>
      <br />
      {twitchUrl && <a href={twitchUrl}>Link</a>}
    </div>
  )
}