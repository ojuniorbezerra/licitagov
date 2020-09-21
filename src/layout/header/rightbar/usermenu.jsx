import React from 'react';
import { Minimize } from 'react-feather';
import { FileText, LogIn, Mail, User, MessageSquare} from 'react-feather';
import man from '../../../assets/images/dashboard/profile.jpg'

const UserMenu = (props) => {

    const logOut = () => {
        localStorage.removeItem('profileURL')
      }

    return (             
     <> 
        <div className="media profile-media">
            <img className="b-r-10" src={man} alt="" />
            <div className="media-body"><span>Emay Walter</span>
            <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
            </div>
        </div>
        <ul className="profile-dropdown onhover-show-div">
            <li><User /><span>Account </span></li>
            <li><Mail /><span>Inbox</span></li>
            <li><FileText /><span>Taskboard</span></li>
            <li onClick={logOut}><LogIn /><span>Log Out</span></li>
        </ul>
     </>
   );
}
export default UserMenu;
