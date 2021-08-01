import React, { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Card from './Card';
import Loader from '../Loader';
import ListForm from './ListForm';
import { getEmployees, deleteEmployee } from '../../redux/redusers/list-reducer';
import { RootStateType } from '../../redux/store';
import { RouteProps } from 'react-router-dom';

const mapStateToProps = (state: RootStateType) => ({
  employees: state.list.employees,
  inProgress: state.list.inProgress,
});

type PropsType = PropsFromRedux & RouteProps

class List extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getEmployees();
  }

  handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    this.props.deleteEmployee(+event.currentTarget.id);
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center ms-3" style={{ width: "35%" }}>
          <ListForm />
        </div>
        <hr />
        {this.props.inProgress ? <Loader message="Loading..." /> :
          this.props.employees.length !== 0 ?
            (<div className="nowrap d-flex flex-wrap justify-content-start">
              {this.props.employees.map((el) => <Card key={el.id} state={el} id={el.id} deleteCard={this.handleClick} />)}
            </div>)
            : <span className="message">Employee not found</span>}
      </>
    )
  }
}
const connector = connect(mapStateToProps, { getEmployees, deleteEmployee })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(List);