import { useState } from 'react';
import set from 'lodash/set';
import merge from 'lodash/merge';

function getValueFromEvent(event) {
  if (event.rgb) {
    return `rgba(${event.rgb.r},${event.rgb.g},${event.rgb.b},${event.rgb.a})`;
  }

  switch (event.target.type) {
    case 'number': case 'range':
      return Number(event.target.value);
    case 'checkbox':
        return Boolean(event.target.checked);
    default:
      return event.target.value;
  }
}

function useStyleData(initialData) {
  const [data, setData] = useState(initialData);

  const setStyleData = (keypath) => (event) => {
    const value = getValueFromEvent(event);

    setData(set({...data}, keypath, value));
  };

  const setAllStyle = (newData) => {
    setData(merge({}, newData));
  };

  return [data, setStyleData, setAllStyle];
}

export default useStyleData;
