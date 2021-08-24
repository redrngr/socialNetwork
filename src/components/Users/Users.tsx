import React from 'react';
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Card from './Card';
import Loader from '../Loader';
import ListForm from './UsersForm';
import Paginator from './Paginator';
import { getUsers } from '../../redux/redusers/list-reducer';
import { RootStateType } from '../../redux/store';
import { RouteComponentProps } from 'react-router-dom';

const mapStateToProps = (state: RootStateType) => ({
  users: state.list.users,
  inProgress: state.list.inProgress,
  totalUsersCount: state.list.totalUsersCount,
  currentPage: state.list.currentPage,
  pageSize: state.list.pageSize,
  term: state.list.filter.term
});

type PropsType = PropsFromRedux & RouteComponentProps

const Users: React.FC<PropsType> = ({ ...props }) => {

  useEffect(() => {
    props.getUsers(1, props.pageSize, '')
  }, [])

  const handleClick = (event: any) => {
    let id = Number(event.target.id)
    if (id === props.currentPage) return
    props.getUsers(id, props.pageSize, props.term)
  }

  let handleSearch = (text: string) => props.getUsers(1, props.pageSize, text)

  const debounce = (fn: (...params: any[]) => any, interval: number) => {
    let timer: ReturnType<typeof setTimeout>
    return function (this: any, ...args: any[]) {
      clearTimeout(timer)
      timer = setTimeout(() => fn.apply(this, args), interval)
    }
  }

  handleSearch = debounce(handleSearch, 300)

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between mx-3">
        <ListForm
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          handleSearch={handleSearch}
          term={props.term}
        />
        <Paginator
          currentPage={props.currentPage}
          totalCount={props.totalUsersCount}
          pageSize={props.pageSize}
          handleClick={handleClick}
          term={props.term}
        />
      </div>
      <hr />
      {props.inProgress ? <Loader message="Loading..." /> :
        props.users.length !== 0 ?
          (
            <div className="d-flex flex-wrap justify-content-start">
              {props.users.map(el => <Card key={el.id} state={el} id={el.id} />)}
            </div>
          ) : (
            <div className="d-flex">
              <span className="alert alert-warning ms-3">Users not found</span>
            </div>
          )}

    </>
  )
}
const connector = connect(mapStateToProps, { getUsers })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Users);