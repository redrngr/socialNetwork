import React from 'react';
import { NavLink, Link, RouteProps } from 'react-router-dom';
import DropMenu from './DropMenu';
import logo from '../../assets/images/logo.svg';

type StateType = { showDrop: boolean }

type PropsType = RouteProps

class Nav extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { showDrop: false }
  }

  handleClick = () => {
    this.setState({ showDrop: !this.state.showDrop })
  }

  render() {
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
        <div className="dropdown">
          <hr />
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded={this.state.showDrop}
            onClick={this.handleClick}>
            <strong>Admin</strong>
          </Link>
          {this.state.showDrop ? <DropMenu onOutside={this.handleClick} /> : null}
        </div>
      </nav>
    )
  }
}

export default Nav;