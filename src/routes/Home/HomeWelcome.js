import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const HomeWelcomeContainer = styled.section`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  background-color: #f7f7f7;
  padding: ${rem('40px')};
  border-bottom: ${rem('1px')} solid rgba(0, 0, 0, 0.1);
`;

const WelcomeTitle = styled.div`
  font-size: ${rem('48px')};
  font-weight: 600;
  margin: 0 auto;
  padding: ${rem('16px')} 0;
`;

const WelcomeText = styled.div`
  font-size: ${rem('16px')};
  font-weight: 400;
  margin: 0 auto;
  padding: ${rem('16px')} 0;
`;

const TwitchLoginButton = styled.a`
  color: white;
  background-color: #6441a4;
  border-style: solid;
  border-width: 0;
  border-radius: ${rem('3px')};
  padding: ${rem('10px')} ${rem('16px')};
  cursor: pointer;
  user-select: none;
  margin: ${rem('16px')} auto;
  text-decoration: none !important;
  transition: background-color 0.1s ease;

  &:hover, &:focus {
    background-color: #7d5bbe;
  }

  &:active {
    background-color: #4b367c;
  }
`;

const WelcomeSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const RandomBox = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: ${rem('3px')};
  box-shadow: inset 0 0 10px black;
  background-image: url(${process.env.PUBLIC_URL + '/img/box-creator-bg.png'});
  height: ${rem('300px')};;
  display: flex;
`;

export default function HomeWelcome() {
  const [twitchUrl, setTwitchUrl] = useState('https://twitch.tv');

  useEffect(() => {
    axios({ url: '/login/twitch-link'})
      .then((response) => {
        setTwitchUrl(response.data.url);
      });
  }, [])

  return (
    <HomeWelcomeContainer>
      <WelcomeSection>
        <WelcomeTitle>LOL Stats</WelcomeTitle>
        <WelcomeText>Your best streaming widget for League Of Legends</WelcomeText>
        <TwitchLoginButton href={twitchUrl}>
          Login with Twitch <FontAwesomeIcon icon={faTwitch} />
        </TwitchLoginButton>
      </WelcomeSection>
      <WelcomeSection>
        <RandomBox />
      </WelcomeSection>
    </HomeWelcomeContainer>
  );
}
