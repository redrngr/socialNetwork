import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DropMenu from './DropMenu';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setAuth } from '../../redux/redusers/common-reducer'
import { RootStateType } from '../../redux/store';

type PropsType = PropsFromRedux

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth
})

const Nav: React.FC<PropsType> = (props) => {
  const [showDrop, setShowDrop] = useState(false)

  const handleClick = () => {
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
          <span className="fs-4"><b>EBase</b></span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/employees" className="nav-link text-white" aria-current="page" activeClassName="active">
              Employees
            </NavLink>
          </li>
        </ul>
      </div>
      {props.isAuth &&
        <div className="dropdown">
          <hr />
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded={showDrop}
            onClick={handleClick}>
            <strong>Admin</strong>
          </Link>
          {showDrop ? <DropMenu onOutside={handleClick} setAuth={props.setAuth} /> : null}
        </div>}
    </nav>
  )
}

const connector = connect(mapStateToProps, { setAuth })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Nav);