import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': 'b5ca5d77-73a2-4e1d-9d41-4093195e078c'
  },
  responseType: 'json',
});


const Employees = {
  all: (currentPage: number, pageSize: number, term: string) => instance.get('/users', {
    params: {
      page: currentPage,
      count: pageSize,
      term: term
    }
  }).then(response => response.data),
  profile: (id: number) => instance.get(`/profile/${id}`).then(response => response.data)
};

// eslint-disable-next-line
export default { Employees };