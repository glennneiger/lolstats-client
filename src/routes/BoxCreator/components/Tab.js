import React from 'react';

function Tab(props) {
  return props.tab === props.index ? props.children : null;
}

export default Tab;