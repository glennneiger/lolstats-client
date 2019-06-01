import React from 'react';

import {
  BoxContainer,
  BoxSection,
  ProfileIcon,
  LeagueIcon,
} from './styles';
import { buildProfileIconSrc, buildLeagueIconSrc} from '../../utils';

import SummonerInfo from './SummonerInfo';

export default function Box(props) {
  const profileIconVisible = props.styleData.profileIcon.enabled;
  const leagueIconVisible = props.styleData.leagueIcon.enabled;

  return (
    <BoxContainer global={props.styleData.global} config={props.styleData.boxContainer}>
      {profileIconVisible && (
        <BoxSection global={props.styleData.global}>
          <ProfileIcon
            config={props.styleData.profileIcon}
            src={buildProfileIconSrc(props.riotData)}
          />
        </BoxSection>
      )}
      <BoxSection global={props.styleData.global}>
        <SummonerInfo
          config={props.styleData.summonerInfo}
          riotData={props.riotData}
        />
      </BoxSection>
      {leagueIconVisible && (
        <BoxSection global={props.styleData.global}>
          <LeagueIcon
            config={props.styleData.leagueIcon}
            src={buildLeagueIconSrc(props.riotData)}
          />
        </BoxSection>
      )}
    </BoxContainer>
  );
}
