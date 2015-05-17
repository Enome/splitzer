require('./index.css');
require('styles/textarea.css');

import React from 'react';
import C from 'omniscient';
import fns from 'modules/functions';

var mixin = {};

var render = ({ cursor }) => {

  var { input, separator, sort } = cursor.toJS();

  var props = {
    className: 'Output TextArea', 
    placeholder: 'OUTPUT', 
    readOnly: true,
    value: fns.output(input, separator, sort)
  };

  return <textarea {...props} />;

};

export default C('Output', mixin, render).jsx;
