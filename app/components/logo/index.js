require('./index.css');

import React from 'react';
import C from 'omniscient';

var mixin = {};

var render = () => {

  return (
    <div className='Logo'>
      <div className='Logo-sign'>÷</div>
      <div className='Logo-text'>Splitzer</div>
    </div>
  );

};

export default C('Logo', mixin, render).jsx;
