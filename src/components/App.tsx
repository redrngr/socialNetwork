import { Redirect, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import List from './List/List';
import Nav from './Navbar/Nav';
import Welcome from './Welcome';
import Login from './Login';
import { RootStateType } from '../redux/store';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.common.isAuth
})

const App: React.FC<PropsFromRedux> = (props) => {
  return (
    <div className="d-flex flex-nowrap vh-100 overflow-hidden">
      <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
        <Nav />
      </aside>
      <main className="container pt-3">
        {props.isAuth
          ?
          (<Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/employees" component={List} />
            <Route path="/employees/:id" component={Profile} />
            <Redirect to="/" />
          </Switch>)
          :
          (<Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>)}
      </main >
    </div >
  )
}

const connector = connect(mapStateToProps, {})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App);