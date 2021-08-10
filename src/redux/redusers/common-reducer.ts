import { AppDispatchType, InferActionsTypes } from "../store";

const initialState = {
  isAuth: false
};

type InitialStateType = typeof initialState

const common = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.isAuth
      };
    default:
      return state;
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
  setAuthAC: (isAuth: boolean) => ({ type: 'SET_AUTH', isAuth } as const)
}

export const setAuth = (isAuth: boolean) => (dispatch: AppDispatchType) => {
  dispatch(actions.setAuthAC(isAuth))
}

export default common;


