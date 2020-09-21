import React, { Fragment,useState,useEffect } from 'react';
import { MENUITEMS } from './menu';
import {Link} from 'react-router-dom'
import { translate } from 'react-switch-lang';
import { Grid } from 'react-feather';

const Sidebar = (props) => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [sidebartoogle, setSidebartoogle] = useState(true)

    useEffect(() => {
    const currentUrl = window.location.pathname;
    mainmenu.filter(items => {
        if (items.path === currentUrl)
            setNavActive(items)
        if (!items.children) return false
        items.children.filter(subItems => {
            if (subItems.path === currentUrl)
                setNavActive(subItems)
            if (!subItems.children) return false
            subItems.children.filter(subSubItems => {
                if (subSubItems.path === currentUrl){
                    setNavActive(subSubItems)
                    return true
                }
                else{
                    return false
                }
            })
            return subItems
        })
        return items
    })
     // eslint-disable-next-line
    }, []);

    const setNavActive = (item) => {
      MENUITEMS.filter(menuItem => {
          if (menuItem !== item)
              menuItem.active = false
          if (menuItem.children && menuItem.children.includes(item))
              menuItem.active = true
          if (menuItem.children) {
              menuItem.children.filter(submenuItems => {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                      menuItem.active = true
                      submenuItems.active = true
                      return true
                  }
                  else{
                      return false
                  }
              })
          }
          return menuItem
      })
      item.active = !item.active
      setMainMenu({ mainmenu: MENUITEMS })
  }
    const toggletNavActive = (item) => {        
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
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

                              {(childrenItem.type === 'sub') ?
                                    <a className={`${childrenItem.active ? 'active' : '' }` } href="#javascript" onClick={() => toggletNavActive(childrenItem)}>{props.t(childrenItem.title)}
                                        <span className="sub-arrow">
                                        <i className="fa fa-chevron-right"></i>
                                        </span>
                                        <div className="according-menu">
                                            {childrenItem.active ?
                                            <i className="fa fa-angle-down"></i>
                                            : <i className="fa fa-angle-right"></i>
                                            }
                                        </div>
                                    </a>
                                :''}

                              {(childrenItem.type === 'link') ?
                                <Link to={childrenItem.path} className={`${childrenItem.active ? 'active' : '' }` } onClick={() => toggletNavActive(childrenItem)}>{props.t(childrenItem.title)}</Link>
                                :''}

                              {(childrenItem.type === 'exteral_link') ?
                                  <a href={childrenItem.path}  className={childrenItem.active ? 'active' : ''} >{props.t(childrenItem.title)}</a>
                                  : ''}
                                

                              {childrenItem.children ?
                                <ul className="nav-sub-childmenu submenu-content"
                                    style={childrenItem.active ? { display: "block" } : {display: "none"}}   
                                    >
                                    {childrenItem.children.map((childrenSubItem, key) =>
                                    <li key={key}>
                                        {(childrenSubItem.type === 'link') ?
                                        <Link to={childrenSubItem.path} className={`${childrenSubItem.active ? 'active' : '' }` } onClick={() => toggletNavActive(childrenSubItem)}>{props.t(childrenSubItem.title)}</Link>
                                        : ''}
                                    </li>
                                    )}
                                </ul>
                              :""}

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