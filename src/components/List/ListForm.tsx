import React, { ChangeEvent } from 'react';
import { useState } from 'react';

type PropsType = {
  currentPage: number
  pageSize: number
  term: string
  handleSearch: (text: string) => any
}

const ListForm: React.FC<PropsType> = (props) => {
  const [term, setTerm] = useState('')

  const handleReset = () => {
    if (term) {
      setTerm('')
      props.handleSearch('')
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
    props.handleSearch(event.target.value)
  }

  return (
    <form className="me-3" onReset={handleReset}>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="basic-addon1">Search</span>
        <input
          name="search"
          className="form-control"
          type="search"
          aria-label="Search"
          placeholder="Enter the name"
          value={term}
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="reset">Reset</button>
      </div>
    </form>
  )
}

export default ListForm;
