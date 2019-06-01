import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { MiniSeriesContainer } from './styles';

export default function MiniSeries(props) {
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