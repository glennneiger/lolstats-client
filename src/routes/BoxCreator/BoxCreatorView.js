import React, { useState } from 'react';
import merge from 'lodash/merge';

import Tab from './components/Tab';
import TabButton from './components/TabButton';
import Editor from './Editor';
import Presets from './Presets';

import Box from '../../components/Box';

import {
  BoxCreatorView,
  BoxCreatorContainer,
  StyleConfigColumn,
  StyleConfigColumnTabs,
  PreviewColumn,
  CreatorRow,
  BoxContainer,
} from './styles';

import useStyleData from '../../hooks/use-style-data';

import defaultPreset from'./presets/default.json';

export default function BoxCreator() {
  const [tab, setTab] = useState(0);
  const [styleData, setStyleData, setAllStyle] = useStyleData(merge({}, defaultPreset));

  const riotData = {
    cdnVersion: '9.10.1', // http://ddragon.leagueoflegends.com/cdn/9.10.1/img/profileicon/${588}.png
    summonerData: {
      name: 'Summoner Name',
      profileIconId: 588,
    },
    entryData: {
      queueType: 'RANKED_SOLO_5x5',
      leaguePoints: 90,
      wins: 300,
      losses: 150,
      veteran: true,
      rank: 'DIAMOND',
      inactive: false,
      freshBlood: false,
      tier: 'III',
      hotStreak: false,
      miniSeries: {
        progress: 'WWLLN',
      },
      miniSeries: null,
    },
  };

  return (
    <BoxCreatorView>
      <BoxCreatorContainer>
        <CreatorRow>
          <StyleConfigColumn>
            <StyleConfigColumnTabs>
              <TabButton active={tab === 0} onClick={() => setTab(0)}>Editor</TabButton>
              <TabButton active={tab === 1} onClick={() => setTab(1)}>Presets</TabButton>
            </StyleConfigColumnTabs>
            <Tab index={0} tab={tab}>
              <Editor styleData={styleData} setStyleData={setStyleData} />
            </Tab>
            <Tab index={1} tab={tab}>
              <Presets setAllStyle={setAllStyle} />
            </Tab>
          </StyleConfigColumn>
          <PreviewColumn>
            <BoxContainer>
              <Box styleData={styleData} riotData={riotData} />
            </BoxContainer>
          </PreviewColumn>
        </CreatorRow>
        {/* <CreatorRow>
          <pre>{JSON.stringify(styleData, null, 2)}</pre>
        </CreatorRow> */}
      </BoxCreatorContainer>
    </BoxCreatorView>
  );
}
