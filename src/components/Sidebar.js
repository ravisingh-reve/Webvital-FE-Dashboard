/* eslint-disable prettier/prettier */
import React from 'react'
import 'sidebar.scss'

const sideBar = () => {
  return (
    <>
      <div className="sidebar">
        <a className="Dashborad" href="#/dashboard" aria-current="page">
          Dashboard
        </a>
        <ul className="sidebar-nav">
          <li className="nav-title">WEB VITALS</li>
          <li className="nav-item">
            <a className="nav-link">Performance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Accessibility</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Best practices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">SEO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">PWA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">First Contentful Paint</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Largest Contentful Paint</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">First Meaningful Paint</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Speed Index</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Total Blocking Time</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default sideBar

