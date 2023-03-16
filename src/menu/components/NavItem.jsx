import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const NavItem = ({ icon, title, url }) => {
  return (
    <div className='nav-item'>
      <Link href={url}>
        <FontAwesomeIcon icon={icon} />
        <p >{title}</p>
      </Link>
    </div>
  )
}

