import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const SubNav = ({item}) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
    <nav className='subnav-Link' onClick={item.subNav && showSubnav}>
      <div className='subnav-row'>
        {item.icon}
        <div className='subnav-label'>{item.title}</div>
      </div>
      <div className='subnav-iconup'>
        {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
      </div>
    </nav>
    {subnav &&
      item.subNav.map((item, index) => {
        return (
          <Link className='subnav-data'  to={item.path} key={index}>
            {item.icon}
            <div className='subnavlabel'>{item.title}</div>
          </Link >
        );
      })}
  </>
  )
}

export default SubNav
