import React, { FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import logo from '../assets/images/logo_black.svg';
import { RootStateType } from '../redux/store';
import { setAuth } from '../redux/redusers/common-reducer';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth
});

type PropsType = PropsFromRedux & RouteComponentProps

const Login: React.FC<PropsType> = (props) => {

  const [authData, setAuthData] = useState({ email: '', password: '' })

  const Login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.setAuth(true)
    props.history.push('/')
  }

  return (
    <main className="text-center">
      <form onSubmit={Login}>
        <img className="mb-4" src={logo} alt="pic" width="72" height="57" style={{ fontSize: 0 }} />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={authData.email}
            onChange={(e) => { setAuthData({ ...authData, email: e.target.value }) }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
            value={authData.password}
            onChange={(e) => { setAuthData({ ...authData, password: e.target.value }) }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="text-muted">EBase&copy; 2021</p>
      </form>
    </main>
  )
}

const connector = connect(mapStateToProps, { setAuth })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login);