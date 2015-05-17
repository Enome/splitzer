require('./index.css');

import R from 'ramda';
import React from 'react';
import C from 'omniscient';
import classnames from 'classnames';

var timeout;

var mixin = {

  componentWillReceiveProps ({ cursor }) {

    var length = cursor.deref().size;

    if (length !== 0) {

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        cursor.update((list) => list.clear());
      }, 400);

    }

  }

};

var render = ({ cursor }) => {

  var notifications = cursor.toJS();

  var classes = classnames(
    'Notifications',
    notifications.length !== 0 && 'isActive'
  );

  var items = R.map((notification) => {
    return (
      <div key={notification} className='Notification'>
        {notification}
      </div>
    );
  }, notifications);

  return (
    <div className={classes}>
      {items}
    </div>
  );

};

export default C('Notifications', mixin, render).jsx;
