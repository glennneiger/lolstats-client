import styled from 'styled-components';
import { rem } from 'polished';

import { mapValue } from '../../utils';

function property(name, suffix) {
  return (props) => props.config[name] + (suffix || '');
}

function propertyGlobal(name, suffix) {
  return (props) => props.global[name] + (suffix || '');
}

function boxShadowInset(props) {
  const { boxShadow } = props.config;
  const b = mapValue(boxShadow.b, 0, 20, 0, 5);

  return `box-shadow: inset 0 0 ${rem(b + 'px')} ${boxShadow.color};`;
}

function textShadow(props) {
  const { textShadow } = props.global;
  const h = mapValue(textShadow.h, -10, 10, -5, 5);
  const v = mapValue(textShadow.v, -10, 10, -5, 5);
  const b = mapValue(textShadow.b, 0, 20, 0, 5);

  return `text-shadow: ${rem(h + 'px')} ${rem(v + 'px')} ${rem(b + 'px')} ${textShadow.color};`;
}

function textShadowSVG(props) {
  const { textShadow } = props.global;
  const h = mapValue(textShadow.h, -10, 10, -5, 5);
  const v = mapValue(textShadow.v, -10, 10, -5, 5);
  const b = mapValue(textShadow.b, 0, 20, 0, 5);

  return `box-shadow: ${rem(h + 'px')} ${rem(v + 'px')} ${rem(b + 'px')} ${textShadow.color};`;
}

export const Colorized = styled.span`
  color: ${(props) => props.color === 'red' ? '#ea1919' : '#39d839'};
`;

export const SummonerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({config}) => rem(mapValue(config.spaceBetween, 0, 20, 0, 10) + 'px')} 0;
  text-align: ${({config}) => config.textAlign};
`;

export const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${({global}) => rem(mapValue(global.padding, 0, 20, 0, 10) + 'px')};
  padding-right: 0;
  align-items: center;

  &:last-child {
    padding-right: ${({global}) => rem(mapValue(global.padding, 0, 20, 0, 10) + 'px')};
  }
`;

export const BoxContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: inline-flex;
  flex-direction: row;
  user-select: none;

  background-color: ${property('backgroundColor')};
  color: ${propertyGlobal('textColor')};
  margin: 0 auto;
  align-self: center;

  border-style: solid;
  border-width: ${({config}) => rem(Math.round(mapValue(config.borderWidth, 0, 20, 0, 5)) + 'px')};
  border-radius: ${({config}) => rem(mapValue(config.borderRadius, 0, 20, 0, 60) + 'px')};
  border-color: ${property('borderColor')};
  ${boxShadowInset}
  ${textShadow}
`;

function iconSize(props) {
  return rem(`${mapValue(props.config.size, 0, 20, 60, 80)}px`);
}

export const ProfileIcon = styled.img`
  display: flex;

  width: ${iconSize};
  height: ${iconSize};
  margin: auto 0;

  border-style: solid;
  border-width: ${({config}) => rem(Math.round(mapValue(config.borderWidth, 0, 20, 0, 5)) + 'px')};
  border-radius: ${({config}) => rem(mapValue(config.borderRadius, 0, 20, 0, 60) + 'px')};
  border-color: ${property('borderColor')};
`;

export const LeagueIcon = styled.img`
  display: flex;

  width: ${iconSize};
  height: ${iconSize};
  margin: auto 0;
`;

export const MiniSeriesContainer = styled.span`
  display: inline;

  & > span {
    padding: ${rem('1px')} ${rem('3px')} ${rem('0px')} ${rem('3px')};
    background-color: rgba(0, 0, 0, .2);
    border-style: solid;
    border-radius: ${rem('30px')};
    border-width: 0;
    & > svg {
      margin-right: ${rem('3px')};
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const divisionColor = {
  'IRON': '#727272',
  'BRONZE': '#704711',
  'SILVER': '#a8a8a8',
  'GOLD': '#ceb41e',
  'PLATINUM': '#98c4e0',
  'DIAMOND': '#86d7e0',
  'MASTER': '#ba3ad1',
  'GRANDMASTER': '#d13a3a',
  'CHALLENGER': '#2bd1ff',
};

function getDivisionColor(rank) {
  return divisionColor[rank] || 'inherit';
}

export const DivisionContainer = styled.span`
  color: ${(props) => getDivisionColor(props.rank)}
`;