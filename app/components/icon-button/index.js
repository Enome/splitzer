require('./index.css');

import React from 'react';
import classnames from 'classnames';
import C from 'omniscient';

var mixin = {};

var render = ({ icon, title, onClick, isActive }) => {

  var button_classes = classnames(
    'IconButton',
    isActive && 'isActive'
  );

  var icon_classes = classnames(
    'fa', 
    'fa-fw', 
    'fa-' + icon
  );

  return (
    <button className={button_classes} title={title} onClick={onClick} >
      <i className={icon_classes} />
    </button>
  );

};

export default C('IconButton', mixin, render).jsx;
