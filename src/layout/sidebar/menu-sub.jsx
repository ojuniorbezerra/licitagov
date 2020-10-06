import React, { Component } from 'react'
import { MENUITEMS } from './menu';


const Sidebar = (props) => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [item, setItem] = useState(item);
    
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
    
    return (
            <> 
                <a className={`nav-link menu-title  ${item.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                    <menuItem.icon/>
                    <span>{props.t(item.title)}</span>
                    <div className="according-menu">
                        {item.active ?
                        <i className="fa fa-angle-down"></i>
                        : <i className="fa fa-angle-right"></i>
                        }
                    </div>
                </a>
            </>
            )
}
