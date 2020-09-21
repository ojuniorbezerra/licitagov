import React from 'react';
import { MessageSquare} from 'react-feather';

const MessageBox = (props) => {

    return (             
      <>
       <MessageSquare />
            <ul className="chat-dropdown onhover-show-div">
              <li className="bg-primary text-center">
                <h6 className="f-18 mb-0">Message Box</h6>
                <p className="mb-0">You have 3 new messages </p>
              </li>
              <li>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../../assets/images/user/1.jpg")} alt="" />
                  <div className="status-circle online"></div>
                  <div className="media-body"><span>Erica Hughes</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-success">58 mins ago</p>
                </div>
              </li>
              <li>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../../assets/images/user/2.jpg")} alt="" />
                  <div className="status-circle online"></div>
                  <div className="media-body"><span>Kori Thomas</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-success">1 hr ago</p>
                </div>
              </li>
              <li>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../../assets/images/user/4.jpg")} alt="" />
                  <div className="status-circle offline"></div>
                  <div className="media-body"><span>Ain Chavez</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-danger">32 mins ago</p>
                </div>
              </li>
              <li className="text-center"> <button className="btn btn-primary">View All     </button></li>
            </ul>
      </>
   );
}
export default MessageBox;
