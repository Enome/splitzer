require('./index.css');

import React from 'react';
import C from 'omniscient';

var mixin = {};

var render = ({ cursor }) => {

  var props = {
    className: 'Separator', 
    placeholder: 'SEPARATOR',
    value: cursor.deref(),
    tabIndex: 2,
    onChange: (event) => {
      cursor.update(() => event.target.value);
    },
  };

  return <input {...props} />;
};

export default C('Separator', mixin, render).jsx;
