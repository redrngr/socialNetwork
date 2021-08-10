import React, { MouseEvent } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
  onOutside: () => void,
  setAuth: (isAuth: boolean) => void
}

const DropMenu: React.FC<PropsType> = ({ onOutside, setAuth }) => {
  let wrapperRef: any = null;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const setWrapperRef = (node: any) => {
    wrapperRef = node;
    console.log(wrapperRef)
  }

  const handleClickOutside = (event: any) => {
    console.log('outside')
    console.log(event)
    if (wrapperRef && !wrapperRef.contains(event.target)) onOutside()
  }

  const Logout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onOutside()
    setAuth(false)
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
        <Link className="dropdown-item" to="#" onClick={Logout}>Logout</Link>
      </li>
    </ul>
  )
}

export default DropMenu;