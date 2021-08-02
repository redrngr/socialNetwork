import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import pic from '../../assets/images/avatarHolder.png'
import Loader from '../Loader';
import { getEmployee } from '../../redux/redusers/employee-reducer';
import { RootStateType } from '../../redux/store';
import { RouteComponentProps } from 'react-router';

const mapStateToProps = (state: RootStateType) => ({
  employee: state.employee.employee
})

type OwnPropsType = { deleteCard: (id: number) => void }

type RouterProps = { id: string }

type PropsType = PropsFromRedux & RouteComponentProps<RouterProps> & OwnPropsType

type StateType = { editMode: boolean }

class Employee extends React.Component<PropsType, StateType> {
  id: number
  constructor(props: PropsType) {
    super(props);
    this.state = { editMode: false }
    this.id = +this.props.match.params.id;
  }

  componentDidMount() {
    this.props.getEmployee(this.id);
  }

  handleToggle = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  handleClick = () => {
    this.props.deleteCard(this.id);
    this.props.history.push('/employees');
  }

  render() {
    if (!this.props.employee) return <Loader message="Loading..." />;
    return (
      <div className="d-flex flex-nowrap mb-5 p-3" style={{ width: "100%" }}>
        <div className="d-flex flex-column">
          <img className="card-img-top" src={pic} alt="Pic" />
        </div>
        <div className="ms-3">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" value={this.props.employee.email} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputTelephone" className="form-label">Telephone number</label>
              <input type="tel" className="form-control" id="inputTelephone" value={this.props.employee.phone} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={this.props.employee.name} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" value={this.props.employee.username} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="website" className="form-label">Website</label>
              <input type="text" className="form-control" id="website" value={this.props.employee.website} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" value={this.props.employee.address.suite} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Street</label>
              <input type="text" className="form-control" id="inputAddress2" value={this.props.employee.address.street} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" value={this.props.employee.address.city} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" disabled={!this.state.editMode}>
                {/* <option defaultValue="selected">{this.props.employee.address.state || 'Choose...'}</option> */}
                {/* {this.props.states.map((el: any, id: number) => <option key={id}>{el.name}</option>)} */}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" value={this.props.employee.address.zipcode} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="d-flex justify-content-between mt-3 mb-3">
              <div className="btn btn-danger" onClick={this.handleClick}>Delete employee</div>
              {
                this.state.editMode ?
                  <button type="submit" className="btn btn-success ms-3">Save changes</button>
                  : <div className="btn btn-primary" onClick={this.handleToggle}>Edit profile</div>
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}


const connector = connect(mapStateToProps, { getEmployee })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Employee);
