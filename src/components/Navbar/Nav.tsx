import React, { MouseEvent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DropMenu from './DropMenu';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { logout } from '../../redux/redusers/common-reducer'
import { RootStateType } from '../../redux/store';

type PropsType = PropsFromRedux

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth,
  login: state.common.login
})

const Nav: React.FC<PropsType> = (props) => {
  const [showDrop, setShowDrop] = useState(false)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
    setShowDrop(!showDrop)
  }

  return (
    <nav className="d-flex flex-column justify-content-between h-100 text-white bg-dark">
      <div>
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img className="bi me-2" src={logo} width="32" height="32" alt="img" />
          <span className="fs-4"><b>Social network</b></span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link text-white" aria-current="page" activeClassName="active">
              My profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/messages" className="nav-link text-white" aria-current="page" activeClassName="active">
              Messages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link text-white" aria-current="page" activeClassName="active">
              Users
            </NavLink>
          </li>
        </ul>
      </div>
      {props.isAuth &&
        <div className="dropdown">
          <hr />
          <Link
            to="#"
            className="text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded={showDrop}
            onClick={handleClick}>
            <strong>{props.login}</strong>
          </Link>
          {showDrop && <DropMenu onOutside={handleClick} logout={props.logout} />}
        </div>}
    </nav>
  )
}

const connector = connect(mapStateToProps, { logout })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Nav);