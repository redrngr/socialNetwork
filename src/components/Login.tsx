import React, { FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import logo from '../assets/images/logo_black.svg';
import { RootStateType } from '../redux/store';
import { login } from '../redux/redusers/common-reducer';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth,
  inProgress: state.common.inProgress,
  messages: state.common.messages
});

type PropsType = PropsFromRedux & RouteComponentProps

const Login: React.FC<PropsType> = (props) => {

  const [authData, setAuthData] = useState({ email: '', password: '', rememberMe: false })

  const Login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.login(authData.email, authData.password, authData.rememberMe)
  }

  if (props.isAuth) {
    <Redirect to='/' />
  }

  return (
    <main className="container pt-5 text-center">
      <form className="w-25 mx-auto" onSubmit={Login}>
        <img className="mb-4" src={logo} alt="pic" width="72" height="57" style={{ fontSize: 0 }} />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {props.messages && <ul className="ps-4 alert alert-danger text-start">{props.messages.map(el => <li>{el}</li>)}</ul>}
        <div className="form-floating mb-3">
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
        <div className="form-floating mb-3">
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
            <input
              type="checkbox"
              value="remember-me"
              checked={authData.rememberMe}
              onChange={(e) => setAuthData({ ...authData, rememberMe: e.target.checked })}
            /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={props.inProgress}>Sign in</button>
        <p className="text-muted">Social network&copy; 2021</p>
      </form>
    </main>
  )
}

const connector = connect(mapStateToProps, { login })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login);