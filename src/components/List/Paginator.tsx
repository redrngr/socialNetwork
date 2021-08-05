import React, { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

type PropsType = {
  totalCount: number
  currentPage: number
  pageSize: number
  portionSize?: number
  term: string
  handleClick: (event: any) => void
}

const Paginator: React.FC<PropsType> = ({ totalCount, pageSize, currentPage, portionSize = 10, term, handleClick }) => {

  let pageCount = Math.ceil(totalCount / pageSize)
  let pageArray = new Array(pageCount).fill(1).map((el, i) => el + i)

  let portionCount = Math.ceil(pageCount / 10)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftLimit = (portionNumber - 1) * portionSize + 1
  let rightLimit = portionNumber * portionSize;

  const previousPortion = (event: any) => {
    event.stopPropagation()
    if (portionNumber > 1) setPortionNumber(portionNumber - 1)
  }

  useEffect(() => {
    setPortionNumber(1)
  }, [term])

  const nextPortion = (event: any) => {
    event.stopPropagation()
    if (portionNumber < portionCount) setPortionNumber(portionNumber + 1)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mb-0" onClick={handleClick}>
        <li className='page-item'><NavLink className="page-link" onClick={previousPortion} to="#">Previous</NavLink></li>
        {pageArray.filter((el) => el >= leftLimit && el <= rightLimit)
          .map((el) => <li key={el} className={currentPage === el ? 'page-item active' : 'page-item'}>
            <NavLink className='page-link' id={el} to="#">{el}</NavLink>
          </li>)}
        <li className="page-item"><NavLink className="page-link" onClick={nextPortion} to="#">Next</NavLink></li>
      </ul>
    </nav>
  )
}

export default Paginator