import { EmployeeType } from './../../types';
import { AppDispatchType, InferActionsTypes } from '../store';
import { GET_EMPLOYEE } from "../actionTypes";
import agent from '../../api';


const initialState = {
  employee: null as EmployeeType | null,
  error: ''
};

type InitialStateType = typeof initialState

const employee = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.employee
      };
    default:
      return state;
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
  getEmployeeAC: (employee: EmployeeType | null) => ({ type: GET_EMPLOYEE, employee }),
}

export const getEmployee = (id: number) => (dispatch: AppDispatchType) => {
  agent.Employees.one(id)
    .then(data => dispatch(actions.getEmployeeAC(data)))
    .catch(console.log);
}

export default employee;