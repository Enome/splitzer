require('./index.css');

import React from 'react';
import C from 'omniscient';
import Header from 'components/header';
import IconButton from 'components/icon-button';
import Input from 'components/input';
import Output from 'components/output';
import Separator from 'components/separator';
import Notifications from 'components/notifications';

var mixin = {};

var render = ({ cursor }) => {

  return (
    <div className='App'>
      <Header cursor={cursor} />
      <Input cursor={cursor.cursor(['input'])} />
      <Output cursor={cursor} />
      <Separator cursor={cursor.cursor(['separator'])} />
      <Notifications cursor={cursor.cursor(['notifications'])} />
    </div>
  );

};

export default C('App', mixin, render).jsx;
