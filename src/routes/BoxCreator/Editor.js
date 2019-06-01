import React, { useState } from 'react';

import InputRange from './components/InputRange';
import InputColor from './components/InputColor';
import InputCheck from './components/InputCheck';
import InputSelect from './components/InputSelect';
import CascadeToggle from './components/CascadeToggle';

export default function Editor(props) {
  const { styleData, setStyleData } = props;
  const [section, setSection] = useState(1);

  return (
    <React.Fragment>
      <CascadeToggle index={0} section={section} toggle={setSection} label='Global'>
        <InputRange
          label='Padding'
          min={0}
          max={20}
          value={styleData.global.padding}
          onChange={setStyleData('global.padding')}
        />
        <InputColor
          label='Text color'
          value={styleData.global.textColor}
          onChange={setStyleData('global.textColor')}
        />
        <InputRange
          label='Text shadow (horizontal)'
          min={-10}
          max={10}
          value={styleData.global.textShadow.h}
          onChange={setStyleData('global.textShadow.h')}
        />
        <InputRange
          label='Text shadow (vertical)'
          min={-10}
          max={10}
          value={styleData.global.textShadow.v}
          onChange={setStyleData('global.textShadow.v')}
        />
        <InputRange
          label='Text shadow (blur)'
          min={0}
          max={20}
          value={styleData.global.textShadow.b}
          onChange={setStyleData('global.textShadow.b')}
        />
        <InputColor
          label='Text shadow color'
          value={styleData.global.textShadow.color}
          onChange={setStyleData('global.textShadow.color')}
        />
      </CascadeToggle>
      <CascadeToggle index={1} section={section} toggle={setSection} label='Box Container'>
        <InputColor
          label='Background color'
          value={styleData.boxContainer.backgroundColor}
          onChange={setStyleData('boxContainer.backgroundColor')}
        />
        <InputRange
          label='Border radius'
          min={0}
          max={20}
          value={styleData.boxContainer.borderRadius}
          onChange={setStyleData('boxContainer.borderRadius')}
        />
        <InputRange
          label='Border width'
          min={0}
          max={20}
          value={styleData.boxContainer.borderWidth}
          onChange={setStyleData('boxContainer.borderWidth')}
        />
        <InputColor
          label='Border color'
          value={styleData.boxContainer.borderColor}
          onChange={setStyleData('boxContainer.borderColor')}
        />
        <InputRange
          label='Box shadow (blur)'
          min={0}
          max={20}
          value={styleData.boxContainer.boxShadow.b}
          onChange={setStyleData('boxContainer.boxShadow.b')}
        />
        <InputColor
          label='Box shadow color'
          value={styleData.boxContainer.boxShadow.color}
          onChange={setStyleData('boxContainer.boxShadow.color')}
        />
      </CascadeToggle>
      <CascadeToggle index={2} section={section} toggle={setSection} label='Profile Icon'>
        <InputCheck
          label='Enabled'
          value={styleData.profileIcon.enabled}
          onChange={setStyleData('profileIcon.enabled')}
        />
        <InputRange
          label='Size'
          min={0}
          max={20}
          value={styleData.profileIcon.size}
          onChange={setStyleData('profileIcon.size')}
        />
        <InputRange
          label='Border radius'
          min={0}
          max={20}
          value={styleData.profileIcon.borderRadius}
          onChange={setStyleData('profileIcon.borderRadius')}
        />
        <InputRange
          label='Border width'
          min={0}
          max={20}
          value={styleData.profileIcon.borderWidth}
          onChange={setStyleData('profileIcon.borderWidth')}
        />
        <InputColor
          label='Border color'
          value={styleData.profileIcon.borderColor}
          onChange={setStyleData('profileIcon.borderColor')}
        />
      </CascadeToggle>
      <CascadeToggle index={3} section={section} toggle={setSection} label='Summoner info'>
        <InputSelect
          label='Text Align'
          value={styleData.summonerInfo.textAlign}
          onChange={setStyleData('summonerInfo.textAlign')}
          options={[
            { value: 'left', text: 'left' },
            { value: 'center', text: 'center' },
            { value: 'right', text: 'right' },
          ]}
        />
        <InputCheck
          label='Colorized division'
          value={styleData.summonerInfo.colorizedDivision}
          onChange={setStyleData('summonerInfo.colorizedDivision')}
        />
        <InputCheck
          label='Colorized winrate'
          value={styleData.summonerInfo.colorizedWinRate}
          onChange={setStyleData('summonerInfo.colorizedWinRate')}
        />
        <InputRange
          label='Space between'
          min={0}
          max={20}
          value={styleData.summonerInfo.spaceBetween}
          onChange={setStyleData('summonerInfo.spaceBetween')}
        />
      </CascadeToggle>
      <CascadeToggle index={4} section={section} toggle={setSection} label='League icon'>
        <InputCheck
          label='Enabled'
          value={styleData.leagueIcon.enabled}
          onChange={setStyleData('leagueIcon.enabled')}
        />
        <InputRange
          label='Size'
          min={0}
          max={20}
          value={styleData.leagueIcon.size}
          onChange={setStyleData('leagueIcon.size')}
        />
      </CascadeToggle>
    </React.Fragment>
  );
}