import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import list from './redusers/list-reducer'
import profile from './redusers/profile-reducer'
import common from './redusers/common-reducer'

export const store = createStore(combineReducers({ list, profile, common }), applyMiddleware(thunk))

//@ts-ignore
window.store = store;

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
