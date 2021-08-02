import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { searchEmployee, getEmployees } from '../../redux/redusers/list-reducer';

type PropsType = PropsFromRedux

type StateType = { searchText: string }

class ListForm extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { searchText: '' }
  }

  handleReset = () => {
    if (this.state.searchText) {
      this.setState(() => ({ searchText: '' }));
      this.props.getEmployees();
    }
  }

  handleSearch = () => this.props.searchEmployee(this.state.searchText)

  debounce = (fn: (...params: any[]) => any, interval: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), interval);
    }
  }

  handleDebounceSearch = this.debounce(this.handleSearch, 300)

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({ searchText: event.target.value }));
    this.handleDebounceSearch();
  }

  render() {
    return (
      <form style={{ width: "100%" }} onReset={this.handleReset}>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input
            name="search"
            className="form-control"
            type="search"
            aria-label="Search"
            placeholder="Enter the name"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-secondary" type="reset">Reset</button>
        </div>
      </form>
    )
  }
}

const connector = connect(null, { searchEmployee, getEmployees })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ListForm);
