require('./index.css');

import React from 'react';
import C from 'omniscient';
import Logo from 'components/logo';
import ButtonGroup from 'components/button-group';

var mixin = {};

var render = ({cursor}) => {

  return (
    <div className='Header'>
      <Logo />
      <ButtonGroup cursor={cursor} />
    </div>
  );

};

export default C('Header', mixin, render).jsx;
