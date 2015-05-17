require('./index.css');

var gui = window.require('nw.gui');
var clipboard = gui.Clipboard.get();

import React from 'react';
import C from 'omniscient';
import IconButton from 'components/icon-button';
import fns from 'modules/functions';

var mixin = {};

var onCopy = (cursor) => (event) => {

  var { input, separator, sort, notifications } = cursor.toJS();
  var output = fns.output(input, separator, sort);
  clipboard.set(output, 'text');

  cursor.cursor('notifications').update((list) => {
    return list.push('Copy');
  });

};

var onSort = (cursor) => (event) => {
  cursor.update(() => !cursor.deref());
};

var render = ({ cursor }) => {

  var sort = cursor.cursor(['sort']);

  return (
    <div className='ButtonGroup'>
      <IconButton title='Sort' icon='sort-amount-asc' onClick={onSort(sort)} isActive={sort.deref()} />
      <IconButton title='Copy to clipboard' icon='clipboard' onClick={onCopy(cursor)} />
    </div>
  );

};

export default C('ButtonGroup', mixin, render).jsx;
