import api from '../../api';
import { ProfileType } from "../../types";
import { AppDispatchType, InferActionsTypes } from "../store";

const initialState = {
  profile: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: ''
    },
    photos: {
      small: '',
      large: ''
    }
  } as ProfileType,
  inProgress: false
};

type InitialStateType = typeof initialState

const list = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'PROFILE_PAGE_LOADED':
      return {
        ...state,
        profile: action.profile
      };
    case 'ASYNC_TOGGLE':
      return {
        ...state,
        inProgress: action.inProgress
      };
    default:
      return state;
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
  loadAC: (profile: ProfileType) => ({ type: 'PROFILE_PAGE_LOADED', profile } as const),
  asyncAC: (inProgress: boolean) => ({ type: 'ASYNC_TOGGLE', inProgress } as const),
}

export const getProfile = (id: number) => (dispatch: AppDispatchType) => {
  dispatch(actions.asyncAC(true))
  api.Users.profile(id)
    .then(data => {
      dispatch(actions.asyncAC(false))
      dispatch(actions.loadAC(data))
    })
    .catch(error => {
      dispatch(actions.asyncAC(false))
      console.log(error)
    });
}

export default list;


