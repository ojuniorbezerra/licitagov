import React from 'react';
import { Bell } from 'react-feather';

const Notification = (props) => {   

    return (             
     <> 
        <div className="notification-box"><Bell /><span className="badge badge-pill badge-secondary">2</span></div>
        <ul className="notification-dropdown onhover-show-div">
          <li className="bg-primary">
            <h6 className="f-18 mb-0">Notitication</h6>
            <p className="mb-0">You have 4 new notification</p>
          </li>
          <li>
            <p className="mb-0"><i className="fa fa-circle-o mr-3 font-primary"> </i>Delivery processing <span className="pull-right">10 min.</span></p>
          </li>
          <li>
            <p className="mb-0"><i className="fa fa-circle-o mr-3 font-success"></i>Order Complete<span className="pull-right">1 hr</span></p>
          </li>
          <li>
            <p className="mb-0"><i className="fa fa-circle-o mr-3 font-info"></i>Tickets Generated<span className="pull-right">3 hr</span></p>
          </li>
          <li>
            <p className="mb-0"><i className="fa fa-circle-o mr-3 font-danger"></i>Delivery Complete<span className="pull-right">6 hr</span></p>
          </li>
          <li><button className="btn btn-primary">Check all notification</button>
          </li>
        </ul>
     </>
   );
}
export default Notification;
