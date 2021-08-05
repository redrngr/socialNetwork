import axios from 'axios';
// import { EmployeeType } from './types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  responseType: 'json',
});

const Auth = {
  // signup: (email: string, password: string) => instance.post('/users/registration', { user: { email, password } }),
  // signin: (email: string, password: string) => instance.post('/users/login', { user: { email, password } })
};

const Employees = {
  get: (currentPage: number, pageSize: number, term: string) => instance.get(`/users?page=${currentPage}&count=${pageSize}&term=${term}`)
    .then(response => response.data)
};

// eslint-disable-next-line
export default { Auth, Employees };