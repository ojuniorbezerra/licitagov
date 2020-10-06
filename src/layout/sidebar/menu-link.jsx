import React, { Component } from 'react'

const MenuLink = (props) => {
   
    return (
            <> 
                <Link to={path} className={`${props.active ? 'active' : '' }` } > { props.title }</Link>
            </>
            )
}
