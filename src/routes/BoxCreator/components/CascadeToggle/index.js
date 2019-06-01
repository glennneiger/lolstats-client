import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { CascadeToggleContainer, CascadeLabel, CascadeContent } from './styles';

export default function CascadeToggle(props) {
  const { index, section, toggle } = props;
  const visible = index === section;

  return (
    <CascadeToggleContainer key={index}>
      <CascadeLabel onClick={() => toggle(visible ? null : index)} visible={visible}>
        <span>{props.label}</span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </CascadeLabel>
      {visible && props.children && (
        <CascadeContent>
          {props.children}
        </CascadeContent>
      )}
    </CascadeToggleContainer>
  );
}
