require('./index.css');
require('styles/textarea.css');

import React from 'react';
import C from 'omniscient';

var mixin = {};

var render = ({ cursor }) => {

  var props = {
    value: cursor.deref(),
    className: 'TextArea Input',
    placeholder: 'INPUT',
    tabIndex: 1,
    autoFocus: true,
    onChange: (event) => {
      cursor.update(() => event.target.value);
    }
  };

  return <textarea autoFocus {...props} />;

};

export default C('Input', mixin, render).jsx;
