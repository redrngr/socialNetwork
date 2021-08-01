import React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
  onOutside: () => void
}

class DropMenu extends React.Component<PropsType> {
  wrapperRef: any

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node: any) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event: any) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutside();
    }
  }

  render() {
    return (
      <ul
        className="dropdown-menu dropdown-menu-dark text-small shadow show"
        aria-labelledby="dropdownUser1"
        style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -33.65px)" }}
        data-popper-placement="top-start"
        ref={this.setWrapperRef}
      >
        <li><Link className="dropdown-item" to="/">New project...</Link></li>
        <li><Link className="dropdown-item" to="/">Settings</Link></li>
        <li><Link className="dropdown-item" to="/">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
      </ul>
    )
  }
}

export default DropMenu;