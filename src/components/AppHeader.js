import React, { useState } from 'react'
import '../scss/AppHeader.scss'
import PropTypes from 'prop-types'

const AppHeader = (props) => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  // return (
  //   <CHeader position="sticky" className="mb-4">
  //     <CContainer fluid>
  //       <CHeaderToggler
  //         className="ps-1"
  //         onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
  //       >
  //         <CIcon icon={cilMenu} size="lg" />
  //       </CHeaderToggler>
  //       <CHeaderBrand className="mx-auto d-md-none" to="/">
  //         <CIcon icon={logo} height={48} alt="Logo" />
  //       </CHeaderBrand>
  //       <CHeaderNav className="d-none d-md-flex me-auto">
  //         <CNavItem>
  //           <CNavLink to="/dashboard" component={NavLink}>
  //             Dashboard
  //           </CNavLink>
  //         </CNavItem>
  //         <CNavItem>
  //           <CNavLink href="#">Users</CNavLink>
  //         </CNavItem>
  //         <CNavItem>
  //           <CNavLink href="#">Settings</CNavLink>
  //         </CNavItem>
  //       </CHeaderNav>
  //       <CHeaderNav>
  //         <CNavItem>
  //           <CNavLink href="#">
  //             <CIcon icon={cilBell} size="lg" />
  //           </CNavLink>
  //         </CNavItem>
  //         <CNavItem>
  //           <CNavLink href="#">
  //             <CIcon icon={cilList} size="lg" />
  //           </CNavLink>
  //         </CNavItem>
  //         <CNavItem>
  //           <CNavLink href="#">
  //             <CIcon icon={cilEnvelopeOpen} size="lg" />
  //           </CNavLink>
  //         </CNavItem>
  //       </CHeaderNav>
  //       <CHeaderNav className="ms-3">
  //         <AppHeaderDropdown />
  //       </CHeaderNav>
  //     </CContainer>
  //     <CHeaderDivider />
  //     <CContainer fluid>
  //       <AppBreadcrumb />
  //     </CContainer>
  //   </CHeader>
  // )
  const pages = ['Home', 'Plp', 'Pdp', 'My Account', 'wishlist', 'Cart', 'Checkout']
  const [selectTab, setSelecttab] = useState(0)
  const [pageSelected, setPageSelected] = useState(0)
  const tabSelect = (index) => {
    setSelecttab(index)
    setPageSelected(0)
    props.setSelectedTab(0)
  }

  const pageSelect = (index) => {
    setPageSelected(index)
  }
  return (
    <>
      <div className="sticky-Header">
        <div className="container-fluid-1">
          <div className="container-display">
            <div
              className={selectTab === 0 ? 'active-Tab' : 'Inactive-tab'}
              onClick={() => {
                tabSelect(0)
              }}
            >
              Desktop
            </div>
            <div
              className={selectTab === 1 ? 'active-Tab' : 'Inactive-tab'}
              onClick={() => tabSelect(1)}
            >
              Msite
            </div>
          </div>
        </div>
        <div className="header-divider" />
        <div className="container-fluid-2">
          {pages.map((page, id) => {
            return (
              <div
                className={pageSelected === id ? 'selectedTab' : 'unselectedTab'}
                onClick={() => pageSelect(id)}
                key={id}
              >
                {page}
              </div>
            )
          })}
        </div>
        <div className="header-divider" />
        <div className="container-fluid-2">
          {props.webvitalsArray.map((items, id) => {
            return (
              <div
                className={props.selectedTab === id ? 'selectedTab' : 'unselectedTab'}
                onClick={() => props.setSelectedTab(id)}
                key={id}
              >
                {items.name}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

AppHeader.propTypes = {
  webvitalsArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
}

export default AppHeader
