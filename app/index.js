import React from 'react';
import state from './state';
import App from 'components/app';
import context from 'modules/context-menu';

var render = () => {
  React.render(<App cursor={state.cursor()} />, document.querySelector('div'));
};

state.on('swap', render);

render();
context.start();
