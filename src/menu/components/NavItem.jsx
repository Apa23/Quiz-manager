import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const NavItem = ({ icon, title, url, open}) => {
  return (
    <Link href={url} className={`nav-item ${open?'open':''}`} >
      
        <FontAwesomeIcon icon={icon} />
        {open?<p >{title}</p>:null}
        {open?<FontAwesomeIcon icon={faAngleRight} />:null}
        

      </Link>
  )
}

