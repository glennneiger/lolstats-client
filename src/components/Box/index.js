import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import {
  BoxContainer,
  BoxSection,
  ProfileIcon,
  SummonerInfoContainer,
  LeagueIcon,
  Colorized,
  MiniSeriesContainer,
  DivisionContainer,
} from './styles';
import { capitalize } from '../../utils';

function WinRate(props) {
  const total = props.wins + props.losses;
  const winRate = Math.round(props.wins * 100 / total);

  let winRateColor = 'green';
  if (winRate < 50) {
    winRateColor = 'red';
  }

  if (props.colorized) {
    return (
      <div>
        <Colorized color='green'>{props.wins}W </Colorized>
        <Colorized color='red'>{props.losses}L </Colorized>
        <Colorized color={winRateColor}>{winRate}%</Colorized>
      </div>
    );
  }

  return (
    <div>
      <span>{props.wins}W</span>
      <span>{' / '}</span>
      <span>{props.loses}L</span>
      <span>{' - '}</span>
      <span>{winRate}%</span>
    </div>
  );
}

function MiniSeries(props) {
  if (!props.progress) {
    return null;
  }

  const chars = props.progress.split('');

  return (
    <MiniSeriesContainer>
     <span>
      {chars.map((char, index) => {
        switch (char) {
          case 'W': return <FontAwesomeIcon key={index} color='#39d839' icon={faCheckCircle} />
          case 'L': return <FontAwesomeIcon key={index} color='#ea1919' icon={faTimesCircle} />
          default: return <FontAwesomeIcon key={index} color='white' icon={faCircle} />
        }
      })}
     </span>
    </MiniSeriesContainer>
  )
}

function SummonerInfo(props) {
  const { summonerData, entryData } = props.riotData;

  return (
    <SummonerInfoContainer {...props}>
      <div>{summonerData.name}</div>
      <div>
        <DivisionContainer colorized={props.config.colorizedDivision} rank={entryData.rank}>
          <span>{capitalize(entryData.rank)} </span>
          <span>{entryData.tier} </span>
        </DivisionContainer>
        <span>{`${entryData.leaguePoints} LP`}</span>
      </div>
      <MiniSeries progress={entryData.miniSeries && entryData.miniSeries.progress} />
      <WinRate wins={entryData.wins} losses={entryData.losses} colorized={props.config.colorizedWinRate} />
    </SummonerInfoContainer>
  );
}

function buildProfileIconSrc(riotData) {
  return `http://ddragon.leagueoflegends.com/cdn/${riotData.cdnVersion}/img/profileicon/${riotData.summonerData.profileIconId}.png`;
}

function buildLeagueIconSrc(riotData) {
  return `${process.env.PUBLIC_URL}img/grandmaster_1.png`;
}

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
