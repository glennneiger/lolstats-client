import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { HeaderContainer, SocialLinks, Title } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Lobo Bot</Title>
      <div>
        <SocialLinks>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/javilobo8'>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitch.tv/javilobo8'>
            <FontAwesomeIcon icon={faTwitch} /> Twitch
          </a>
        </SocialLinks>
      </div>
    </HeaderContainer>
  );
}
