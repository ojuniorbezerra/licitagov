import React, { Fragment,useState,useEffect } from 'react';
import { MENUITEMS } from './menu';
import {Link} from 'react-router-dom'
import { translate } from 'react-switch-lang';
import { Grid } from 'react-feather';
var _ = require('lodash/core');

const Sidebar = (props) => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [sidebartoogle, setSidebartoogle] = useState(true)


  const setNavActiveByUrl = () => {
    const currentUrl = window.location.pathname;
    MENUITEMS.forEach(sub => {
      sub.children.forEach(link => {
        if (link.path === currentUrl) {
          link.active = true
          sub.active = true;
        }
        return
      })
    })
    setMainMenu({ mainmenu: MENUITEMS })
  }
  
    useEffect(() => {
      setNavActiveByUrl()
     // eslint-disable-next-line
    }, []);
    
    const toggletNavActive = (item) => {
      MENUITEMS.forEach(sub => {
        if(item.type === 'sub'){
          sub.active = sub.title === item.title;
        }else{
          sub.active = !!_.find(sub.children, {title: item.title})
          sub.children.forEach(link => {
            if (link.title === item.title) {
              link.active = true
              sub.active = true;
            }else{
              link.active = false
            }
          })
        }
      })
      setMainMenu({ mainmenu: MENUITEMS })
    }

    const openCloseSidebar = (toggle) => {
      if (toggle) {
        setSidebartoogle(!toggle);
        document.querySelector(".page-main-header").className = "page-main-header close_icon";
        document.querySelector(".main-nav").className = "main-nav close_icon "
      } else {
        setSidebartoogle(!toggle);
        document.querySelector(".page-main-header").className = "page-main-header";
        document.querySelector(".main-nav").className = "main-nav "
      }
    };
  
    const responsiveSidebar = () => {
      document.querySelector(".page-main-header").className = "page-main-header close_icon";
      document.querySelector(".main-nav").className = "main-nav close_icon"
    }

    
    return (
        <Fragment>
          <header className="main-nav">
            <div className="logo-wrapper">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
                <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
                <div className="back-btn" onClick={() => responsiveSidebar()}><i className="fa fa-angle-left"></i></div>
              </Link>
            <div className="toggle-sidebar" onClick={() => openCloseSidebar(sidebartoogle)}><Grid className="status_toggle middle" id="sidebar-toggle" /></div>
            </div>
            <div className="logo-icon-wrapper">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><img className="img-fluid" src={require("../../assets/images/logo/logo-icon.png")} alt="" /></Link>
            </div>
            <nav>
              <div className="main-navbar">
                <div id="mainnav">
                  <ul className="nav-menu custom-scrollbar">
                    <li className="back-btn">
                      <div className="mobile-back text-right"><span>Back</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                    </li>
                    {
                    MENUITEMS.map((menuItem, i) => 
                    <li className="dropdown" key={i}>
                      
                    {(menuItem.type === 'sub') ?
                      <a className={`nav-link menu-title  ${menuItem.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                        <menuItem.icon/>
                        <span>{props.t(menuItem.title)}</span>
                        <div className="according-menu">
                          {menuItem.active ?
                            <i className="fa fa-angle-down"></i>
                            : <i className="fa fa-angle-right"></i>
                          }
                        </div>
                      </a>
                      :''}
                      {menuItem.children ?
                      
                      <ul className="nav-submenu menu-content"
                          style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {display: "none"}}>
                          
                          {menuItem.children.map((childrenItem, index) => {
                            return(
                            <li key={index}>
                              {(childrenItem.type === 'link') ?
                                <Link to={childrenItem.path} className={`${childrenItem.active ? 'active' : '' }` } onClick={() => toggletNavActive(childrenItem)}>{props.t(childrenItem.title)}</Link>
                                :''}
                              </li>
                              )
                            })}
                      </ul>
                      : ''}
                    </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </header>  
        </Fragment>
    );
}

export default translate(Sidebar);