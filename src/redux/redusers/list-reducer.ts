import api from '../../api';
import { EmployeeType } from "../../types";
import { AppDispatchType, InferActionsTypes } from "../store";

const initialState = {
  employees: [] as EmployeeType[],
  inProgress: false,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  filter: {
    term: ''
  }
};

type InitialStateType = typeof initialState

const list = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'LIST_PAGE_LOADED':
      return {
        ...state,
        employees: action.employees
      };
    case 'ASYNC_TOGGLE':
      return {
        ...state,
        inProgress: action.inProgress
      };
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: { term: action.term }
      };
    default:
      return state;
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
  loadAC: (employees: Array<EmployeeType>) => ({ type: 'LIST_PAGE_LOADED', employees } as const),
  asyncAC: (inProgress: boolean) => ({ type: 'ASYNC_TOGGLE', inProgress } as const),
  setTotalUsersCountAC: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
  setCurrentPageAC: (page: number) => ({ type: 'SET_CURRENT_PAGE', page } as const),
  setFilterAC: (term: string) => ({ type: 'SET_FILTER', term } as const)
}

export const getEmployees = (page: number, pageSize: number, term: string) => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true))
  api.Employees.all(page, pageSize, term)
    .then(data => {
      dispatch(actions.asyncAC(false))
      dispatch(actions.loadAC(data.items))
      dispatch(actions.setTotalUsersCountAC(data.totalCount))
    })
    .catch(error => {
      dispatch(actions.asyncAC(false))
      console.log(error)
    });
  dispatch(actions.setCurrentPageAC(page))
  dispatch(actions.setFilterAC(term))
}

export default list;


