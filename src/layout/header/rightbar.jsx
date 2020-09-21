import React, { Fragment } from 'react';
import { FullScreen, MessageBox, Notification, Moonlight } from './rightbar/';

import UserMenu from './rightbar/usermenu';

const Rightbar = (props) => {
  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-menu">
        <ul className="nav-menus">
          <li className="onhover-dropdown"><Notification /></li>
          <li><Moonlight /></li>
          <li className="onhover-dropdown"><MessageBox /></li>
          <li className="maximize"><FullScreen /></li>
          <li className="onhover-dropdown p-0"><UserMenu /></li>
        </ul>
      </div>
    </Fragment>
  );
}
export default Rightbar;