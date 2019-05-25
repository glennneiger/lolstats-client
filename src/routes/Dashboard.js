import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [summonerName, setSummonerName] = useState('MrHotRock');
  const [region, setRegion] = useState('');
  const [regionList, setRegionList] = useState([]); // key, value

  useEffect(() => {
    axios({ url: '/constants' })
      .then((response) => {
        const regions = response.data.regions;
        setRegionList(Object.keys(regions).map((key) => ({ key, value: regions[key] })));
        setRegion(regions.EUW);
      });
  }, []);

  function sendData() {
    axios({ url: '/account', method: 'POST', data: { summonerName, region } })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Summoner name</p>
      <input name='summonerName' value={summonerName} onChange={(event) => setSummonerName(event.target.value)} />
      <p>Region</p>
      <select name='region' value={region} onChange={(event) => setRegion(event.target.value)}>
        {regionList.map(({ key, value }) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>
      <button onClick={sendData}>Send</button>
    </div>
  )
}