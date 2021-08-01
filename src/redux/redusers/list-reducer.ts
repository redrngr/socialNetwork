// import { InferActionsTypes } from './../store';
import { LIST_PAGE_LOADED, ASYNC_TOGGLE } from "../actionTypes";
import agent from '../../api';
import { EmployeeType } from "../../types";
import { AppDispatchType } from "../store";


const initialState = {
  employees: [] as EmployeeType[],
  inProgress: false
};

type InitialStateType = typeof initialState

const list = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case LIST_PAGE_LOADED:
      return {
        ...state,
        employees: action.payload
      };
    case ASYNC_TOGGLE:
      return {
        ...state,
        inProgress: action.inProgress
      };
    default:
      return state;
  }
}

// type ActionType = InferActionsTypes<typeof actions>

const actions = {
  loadAC: (payload: Array<EmployeeType>) => ({ type: LIST_PAGE_LOADED, payload }),
  asyncAC: (inProgress: boolean) => ({ type: ASYNC_TOGGLE, inProgress }),
}

export const getEmployees = () => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true));
  agent.Employees.all()
    .then(data => {
      dispatch(actions.asyncAC(false));
      dispatch(actions.loadAC(data));
    });
}

export const searchEmployee = (text: string) => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true));
  agent.Employees.search(text)
    .then(data => {
      dispatch(actions.asyncAC(false));
      dispatch(actions.loadAC(data));
    });
}

export const deleteEmployee = (id: number) => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true));
  agent.Employees.delete(id)
    .then(res => {
      dispatch(actions.asyncAC(false));
      if (res.status >= 200 && res.status < 400) getEmployees();
    });
}

export default list;


