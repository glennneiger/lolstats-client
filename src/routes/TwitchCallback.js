import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { rem } from 'polished';

import history from '../utils/history';

import MainLayout from '../layouts/MainLayout';

const Section = styled.section`
  padding: ${rem('10px')};
`;

export default function TwitchCallback() {
  const [, setToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    axios({ method: 'post', url: '/login', data: { code } })
      .then((response) => {
        axios.defaults.headers['Authorization'] = `Bearer ${response.data}`;
        setToken(axios.defaults.headers['Authorization']);

        history.push('/dashboard');
      });
  }, [])

  return (
    <MainLayout>
      <Section>
        Signing in...
      </Section>
    </MainLayout>
  )
}