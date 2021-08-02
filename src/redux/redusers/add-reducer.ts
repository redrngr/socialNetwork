import { ADD_PAGE_LOADED, ASYNC_TOGGLE } from "../actionTypes";
import agent from "../../api";
import { EmployeeType } from '../../types';
import { AppDispatchType, InferActionsTypes } from '../store';

type InitialStateType = typeof initialState

const initialState = {
  addStatus: false,
  inProgress: false
}

const add = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_PAGE_LOADED:
      return {
        ...state,
        addStatus: action.isAdd
      };
    case ASYNC_TOGGLE:
      return {
        ...state,
        inProgress: action.inProgress
      }
    default:
      return state;
  }
}


type ActionTypes = InferActionsTypes<typeof actions>

const actions = {
  asyncAC: (inProgress: boolean) => ({ type: ASYNC_TOGGLE, inProgress }),
  loadAC: (isAdd: boolean) => ({ type: ADD_PAGE_LOADED, isAdd })
}


export const addEmployee = (data: EmployeeType) => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true));
  agent.Employees.add(data)
    .then(res => {
      dispatch(actions.asyncAC(false));
      dispatch(actions.loadAC((res.status >= 200 && res.status < 400)));
    });
}

export default add;