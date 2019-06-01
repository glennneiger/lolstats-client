import React from 'react';

function Tab(props) {
  const visible = props.tab === props.index;

  return (
    <div style={{ display: visible ? 'initial' : 'none' }}>
      {props.children}
    </div>
  );
}

export default Tab;