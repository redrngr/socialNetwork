import React, { MouseEvent } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
  onOutside: (e: MouseEvent<HTMLAnchorElement>) => void,
  logout: () => void
}

const DropMenu: React.FC<PropsType> = (props) => {
  let wrapperRef: any = null;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const setWrapperRef = (node: any) => wrapperRef = node

  const handleClickOutside = (e: any) => {
    if (wrapperRef && !wrapperRef.contains(e.target) && !wrapperRef.previousSibling.contains(e.target)) props.onOutside(e)
  }

  const logout = (e: MouseEvent<HTMLAnchorElement>) => {
    props.onOutside(e)
    props.logout()
  }

  return (
    <ul
      className="dropdown-menu dropdown-menu-dark text-small shadow show"
      aria-labelledby="dropdownUser1"
      style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -33.65px)" }}
      data-popper-placement="top-start"
      ref={setWrapperRef}
    >
      <li>
        <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
      </li>
    </ul>
  )
}

export default DropMenu;