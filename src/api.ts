import axios from 'axios';
import { EmployeeType } from './types';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/redrngr/api',
  responseType: 'json',
});

const Auth = {
  signup: (email: string, password: string) => instance.post('/users/registration', { user: { email, password } }),
  signin: (email: string, password: string) => instance.post('/users/login', { user: { email, password } })
};

const Employees = {
  all: () => instance.get<Array<EmployeeType>>('/employees').then(res => res.data),
  one: (id: number) => instance.get<EmployeeType>(`/employees/${id}`).then(res => res.data),
  delete: (id: number) => instance.delete<any>(`/employees/${id}`),
  add: (data: EmployeeType) => instance.post<any>(`/employees`, data),
  search: (text: string) => instance.get<Array<EmployeeType>>(`/employees?name_like=${text}`).then(res => res.data)
};

// eslint-disable-next-line
export default { Auth, Employees };