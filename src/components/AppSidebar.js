import React from 'react'
import '../scss/sidebar.scss'
import PropTypes from 'prop-types'

const AppSidebar = (props) => {
  const tabSelect = (index) => {
    props.setSelectedTab(index)
  }
  return (
    <>
      <div className="sidebar">
        <a className="Dashborad" href="#/dashboard" aria-current="page">
          Dashboard
        </a>
        <ul className="sidebar-nav">
          <li className="nav-title">WEB VITALS</li>
          {props.webvitalsArray.map((items, index) => {
            return (
              <li
                className={props.selectedTab === index && 'selected-nav-item'}
                key={index}
                onClick={() => tabSelect(index)}
              >
                <a className="nav-link" href={items.link}>
                  {items.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

AppSidebar.propTypes = {
  webvitalsArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
}

export default AppSidebar
