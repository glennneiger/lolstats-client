import React from 'react';

import { Colorized } from './styles';

export default function WinRate(props) {
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