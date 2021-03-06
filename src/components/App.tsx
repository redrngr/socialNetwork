import { Redirect, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import Users from './Users/Users';
import Nav from './Navbar/Nav';
import Welcome from './Welcome';
import Login from './Login';
import { RootStateType } from '../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import NotFound from './NotFound';
import { useEffect } from 'react';
import { getUserData } from '../redux/redusers/common-reducer';
import Loader from './Loader';

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth,
  appLoaded: state.common.appLoaded
})

const App: React.FC<PropsFromRedux> = (props) => {

  useEffect(() => {
    props.getUserData()
  }, [props.isAuth])

  if (props.appLoaded) {
    if (!props.isAuth) return (
      <div className="d-flex flex-nowrap vh-100 overflow-hidden">
        <main className="container pt-3">
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </main >
      </div >
    )
    return (
      <div className="d-flex flex-nowrap vh-100 overflow-hidden">
        <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
          <Nav />
        </aside>
        <main className="container pt-3">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={Profile} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </main >
      </div >
    )
  }
  return <Loader message="Wait" />
}

const connector = connect(mapStateToProps, { getUserData })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App);