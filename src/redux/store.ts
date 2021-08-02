import { configureStore } from '@reduxjs/toolkit'
import list from './redusers/list-reducer'
import employee from './redusers/employee-reducer'
import add from './redusers/add-reducer'

export const store = configureStore({ reducer: { list, employee, add } })

//@ts-ignore
window.store = store;

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
