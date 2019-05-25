import React, { useState } from 'react';

import InputRange from './components/InputRange';
import InputColor from './components/InputColor';
import Tab from './components/Tab';
import TabButton from './components/TabButton';
import CascadeToggle from './components/CascadeToggle';

import {
  BoxCreatorView,
  BoxCreatorContainer,
  StyleConfigColumn,
  StyleConfigColumnTabs,
  PreviewColumn,
} from './styles';

import useStyleData from './use-style-data';

export default function BoxCreator() {
  const [tab, setTab] = useState(0);
  const [styleData, setStyleData] = useStyleData({
    global: {
      padding: 10,
      textColor: 'red',
      textShadow: { h: 2, v: 2, b: 2, color: 'green' },
    },
    boxContainer: {
      backgroundColor: 'red',
      borderRadius: 100,
      borderWidth: 3,
      borderColor: 'black',
      boxShadow: { b: 5, color: 'black' },
    },
    profileIcon: {
      size: 60,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: 'green',
    },
    summonerInfo: {
      textAlign: 'center',
      spaceBetween: 0,
    },
    leagueIcon: {
      size: 60,
    },
  });

  return (
    <BoxCreatorView>
      <BoxCreatorContainer>
        <StyleConfigColumn>
          <StyleConfigColumnTabs>
            <TabButton active={tab === 0} onClick={() => setTab(0)}>Editor</TabButton>
            <TabButton active={tab === 1} onClick={() => setTab(1)}>Presets</TabButton>
          </StyleConfigColumnTabs>
          <Tab index={0} tab={tab}>
            <CascadeToggle label='Global' visible>
              <InputRange
                label='Padding'
                min={0}
                max={10}
                value={styleData.global.padding}
                onChange={setStyleData('global.padding')}
              />
              <InputColor
                label='Text color'
                value={styleData.global.textColor}
                onChange={setStyleData('global.textColor')}
              />
              <InputRange
                label='Text shadow (h)'
                min={0}
                max={4}
                value={styleData.global.textShadow.h}
                onChange={setStyleData('global.textShadow.h')}
              />
              <InputRange
                label='Text shadow (v)'
                min={0}
                max={4}
                value={styleData.global.textShadow.v}
                onChange={setStyleData('global.textShadow.v')}
              />
              <InputRange
                label='Text shadow (b)'
                min={0}
                max={5}
                value={styleData.global.textShadow.b}
                onChange={setStyleData('global.textShadow.b')}
              />
              <InputColor
                label='Text shadow color'
                value={styleData.global.textShadow.color}
                onChange={setStyleData('global.textShadow.color')}
              />
            </CascadeToggle>
            <CascadeToggle label='Box Container'>
              <InputColor
                label='Background color'
                value={styleData.boxContainer.backgroundColor}
                onChange={setStyleData('boxContainer.backgroundColor')}
              />
              <InputRange
                label='Border radius'
                min={0}
                max={100}
                value={styleData.boxContainer.borderRadius}
                onChange={setStyleData('boxContainer.borderRadius')}
              />
              <InputRange
                label='Border width'
                min={0}
                max={5}
                value={styleData.boxContainer.borderWidth}
                onChange={setStyleData('boxContainer.borderWidth')}
              />
              <InputColor
                label='Border color'
                value={styleData.boxContainer.borderColor}
                onChange={setStyleData('boxContainer.borderColor')}
              />
              <InputRange
                label='Box shadow (b)'
                min={0}
                max={5}
                value={styleData.boxContainer.boxShadow.b}
                onChange={setStyleData('boxContainer.boxShadow.b')}
              />
              <InputColor
                label='Box shadow color'
                value={styleData.boxContainer.boxShadow.color}
                onChange={setStyleData('boxContainer.boxShadow.color')}
              />
            </CascadeToggle>
            <CascadeToggle label='Profile Icon'>
              <InputRange
                label='Size'
                min={0}
                max={80}
                value={styleData.profileIcon.size}
                onChange={setStyleData('profileIcon.size')}
              />
              <InputRange
                label='Border radius'
                min={0}
                max={100}
                value={styleData.profileIcon.borderRadius}
                onChange={setStyleData('profileIcon.borderRadius')}
              />
              <InputRange
                label='Border width'
                min={0}
                max={5}
                value={styleData.profileIcon.borderWidth}
                onChange={setStyleData('profileIcon.borderWidth')}
              />
              <InputColor
                label='Border color'
                value={styleData.profileIcon.borderColor}
                onChange={setStyleData('profileIcon.borderColor')}
              />
            </CascadeToggle>
            <CascadeToggle label='Summoner info'>
              <InputRange
                label='Space between'
                min={0}
                max={10}
                value={styleData.summonerInfo.spaceBetween}
                onChange={setStyleData('summonerInfo.spaceBetween')}
              />
            </CascadeToggle>
            <CascadeToggle label='League icon'>
              <InputRange
                label='Size'
                min={0}
                max={80}
                value={styleData.leagueIcon.size}
                onChange={setStyleData('leagueIcon.size')}
              />
            </CascadeToggle>
          </Tab>
          <Tab index={1} tab={tab}>
            Presets
          </Tab>
        </StyleConfigColumn>
        <PreviewColumn>
          <pre>{JSON.stringify(styleData, null, 2)}</pre>
        </PreviewColumn>
      </BoxCreatorContainer>
    </BoxCreatorView>
  );
}
