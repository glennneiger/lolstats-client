import React from 'react';

import { capitalize } from '../../utils';
import { SummonerInfoContainer, DivisionContainer } from './styles';

import MiniSeries from './MiniSeries';
import WinRate from './WinRate';

export default function SummonerInfo(props) {
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