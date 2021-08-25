import api from "../../api";
import { AppDispatchType, InferActionsTypes } from "../store";

const initialState = {
  id: 0,
  email: '',
  login: '',
  messages: null as string[] | null,
  isAuth: false,
  inProgress: false,
  appLoaded: false
};

type InitialStateType = typeof initialState

const common = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'APP_LOADED':
      return {
        ...state,
        appLoaded: true
      }
    case 'SET_AUTH_DATA':
      return {
        ...state,
        ...action.payload
      }
    case 'ERROR':
      return {
        ...state,
        messages: action.messages
      }
    case 'ASYNC_TOGGLE':
      return {
        ...state,
        inProgress: action.inProgress
      }
    default:
      return state;
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
  loadAppAC: () => ({ type: 'APP_LOADED' } as const),
  asyncAC: (inProgress: boolean) => ({ type: 'ASYNC_TOGGLE', inProgress } as const),
  setAuthDataAC: (id: number, login: string, email: string, isAuth: boolean) =>
    ({ type: 'SET_AUTH_DATA', payload: { id, login, email, isAuth } } as const),
  setMessagesAC: (messages: string[] | null) => ({ type: 'ERROR', messages } as const)
}

export const getUserData = () => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true))
  api.Auth.me().then(res => {
    if (res.data.resultCode === 0) {
      const { id, email, login } = res.data.data
      dispatch(actions.setAuthDataAC(id, login, email, true))
    }
    dispatch(actions.asyncAC(false))
    dispatch(actions.loadAppAC())
  })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  dispatch(actions.asyncAC(true))
  api.Auth.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(actions.setMessagesAC(null))
        dispatch(getUserData())
      } else {
        dispatch(actions.setMessagesAC(res.data.messages))
      }
      dispatch(actions.asyncAC(false))
    })
}

export const logout = () => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true))
  api.Auth.logout()
    .then(res => {
      if (res.data.resultCode === 0) dispatch(actions.setAuthDataAC(0, '', '', false))
      dispatch(actions.asyncAC(false))
    })
}

export default common;


